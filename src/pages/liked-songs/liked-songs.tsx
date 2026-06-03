import React, { useState, useEffect } from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { 
  LikedSongsContainer, 
  HeaderContent, 
  HeartIcon,
  HeaderInfo,
  ActionBar,
  PlayButton,
  ShuffleButton,
  SongsList,
  SongsHeader,
  SongRow,
  LikedBySection
} from "./styles/liked-songs.style";
import { Song } from "../../types/music";
import { fetchPopularSongs, convertITunesTrackToSong } from "../../services/iTunesApi";
import { usePlayer } from "../../context/PlayerContext";
import { formatDuration } from "../../data/mockData";

const LikedSongs: React.FC = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const { currentSong, isPlaying, playAlbum, togglePlay, toggleShuffle, shuffle } = usePlayer();

  useEffect(() => {
    const loadSongs = async () => {
      try {
        const data = await fetchPopularSongs('top hits 2024', 30);
        setSongs(data.map((t, i) => convertITunesTrackToSong(t, i)));
      } catch (error) {
        console.error('Error loading songs:', error);
      }
    };
    loadSongs();
  }, []);

  const handlePlayAll = () => {
    if (songs.length > 0) {
      playAlbum(songs);
    }
  };

  const handlePlaySong = (index: number) => {
    if (currentSong?.id === songs[index].id && isPlaying) {
      togglePlay();
    } else {
      playAlbum(songs, index);
    }
  };

  const totalDuration = songs.reduce((acc, song) => acc + song.duration, 0);
  const hours = Math.floor(totalDuration / 3600);
  const minutes = Math.floor((totalDuration % 3600) / 60);

  return (
    <LikedSongsContainer>
      <HeaderContent>
        <HeartIcon>
          <FavoriteIcon />
        </HeartIcon>
        <HeaderInfo>
          <span className="playlist-type">Playlist</span>
          <h1>Liked Songs</h1>
          <p className="description">
            A collection of your favorite tracks
          </p>
          <p className="stats">
            <span>Spotify</span> • {songs.length} songs{hours > 0 ? `, ${hours} hr ${minutes} min` : `, about ${minutes} min`}
          </p>
        </HeaderInfo>
      </HeaderContent>

      <ActionBar>
        <PlayButton onClick={handlePlayAll}>
          {isPlaying && songs.some(s => s.id === currentSong?.id) ? (
            <PauseIcon />
          ) : (
            <PlayArrowIcon />
          )}
        </PlayButton>
        <ShuffleButton onClick={toggleShuffle} style={{ 
          background: shuffle ? 'rgba(29, 185, 84, 0.2)' : 'transparent',
          color: shuffle ? '#1db954' : '#1db954'
        }}>
          <ShuffleIcon />
        </ShuffleButton>
      </ActionBar>

      <SongsList>
        <SongsHeader>
          <span>#</span>
          <span>Title</span>
          <span>Album</span>
          <span><ScheduleIcon fontSize="small" /></span>
        </SongsHeader>

        {songs.map((song, index) => (
          <SongRow 
            key={song.id}
            isPlaying={currentSong?.id === song.id}
            onClick={() => handlePlaySong(index)}
          >
            <div className="song-cell">
              <span className="song-number">{index + 1}</span>
              {currentSong?.id === song.id && isPlaying ? (
                <PauseIcon className="play-icon" sx={{ fontSize: 18, color: '#1db954' }} />
              ) : (
                <PlayArrowIcon className="play-icon" sx={{ fontSize: 18, color: '#fff' }} />
              )}
            </div>
            <div className="song-cell">
              <img src={song.coverImage} alt={song.title} className="song-image" />
              <div className="song-info">
                <div className="song-title">{song.title}</div>
                <div className="song-artist">{song.artist.name}</div>
              </div>
            </div>
            <div className="album-name">
              {song.album.title}
            </div>
            <div className="duration">
              {formatDuration(song.duration)}
            </div>
          </SongRow>
        ))}
      </SongsList>

      <LikedBySection>
        <div className="avatar" />
        <div className="text">
          Made for <span>Thinley</span>
        </div>
      </LikedBySection>
    </LikedSongsContainer>
  );
};

export default LikedSongs;
