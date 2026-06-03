import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { 
  HomeContainer, 
  GoodAfternoon, 
  QuickPicksGrid, 
  QuickPickCard,
  SectionHeader,
  SectionGrid,
  Card,
  LoadingContainer
} from "./styles/home.style";
import { Song } from "../../types/music";
import { fetchPopularSongs, convertITunesTrackToSong } from "../../services/iTunesApi";
import { usePlayer } from "../../context/PlayerContext";

const QUICK_PICKS = [
  { id: 'liked', name: 'Liked Songs', image: null, isLiked: true },
  { id: 'daily1', name: 'Daily Mix 1', image: null },
  { id: 'daily2', name: 'Daily Mix 2', image: null },
  { id: 'discover', name: 'Discover Weekly', image: null },
  { id: 'release', name: 'Release Radar', image: null },
  { id: 'top', name: 'Top Songs 2024', image: null },
];

const Home: React.FC = () => {
  const [featuredSongs, setFeaturedSongs] = useState<Song[]>([]);
  const [madeForYou, setMadeForYou] = useState<Song[]>([]);
  const [recentlyPlayed, setRecentlyPlayed] = useState<Song[]>([]);
  const [topMixes, setTopMixes] = useState<Song[]>([]);
  const [loading, setLoading] = useState(true);
  const { playAlbum } = usePlayer();

  useEffect(() => {
    const loadMusic = async () => {
      try {
        const [featured, recent, mixes, made] = await Promise.all([
          fetchPopularSongs('top hits 2024', 8),
          fetchPopularSongs('chill music', 6),
          fetchPopularSongs('workout music', 6),
          fetchPopularSongs('indie rock', 6),
        ]);

        setFeaturedSongs(featured.map((t, i) => convertITunesTrackToSong(t, i)));
        setRecentlyPlayed(recent.map((t, i) => convertITunesTrackToSong(t, i)));
        setTopMixes(mixes.map((t, i) => convertITunesTrackToSong(t, i)));
        setMadeForYou(made.map((t, i) => convertITunesTrackToSong(t, i)));

      } catch (error) {
        console.error('Error loading music:', error);
      } finally {
        setLoading(false);
      }
    };

    loadMusic();
  }, []);

  const handlePlayQuickPick = (id: string) => {
    if (featuredSongs.length > 0) {
      playAlbum(featuredSongs);
    }
  };

  if (loading) {
    return (
      <HomeContainer>
        <LoadingContainer>
          <CircularProgress color="primary" />
        </LoadingContainer>
      </HomeContainer>
    );
  }

  return (
    <HomeContainer>
      <GoodAfternoon>
        <h1>Good afternoon</h1>
        <QuickPicksGrid>
          {QUICK_PICKS.slice(0, 6).map((pick) => (
            <QuickPickCard 
              key={pick.id}
              onClick={() => handlePlayQuickPick(pick.id)}
            >
              {pick.isLiked ? (
                <Box 
                  className="card-image"
                  sx={{ 
                    background: 'linear-gradient(135deg, #450a5a 0%, #1db954 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <FavoriteIcon sx={{ color: '#1db954', fontSize: 40 }} />
                </Box>
              ) : (
                <img 
                  className="card-image"
                  src={featuredSongs.find((_, i) => i % 6 === QUICK_PICKS.indexOf(pick))?.coverImage || 'https://picsum.photos/200'}
                  alt={pick.name}
                />
              )}
              <span className="card-title">{pick.name}</span>
              <button className="play-btn">
                <PlayArrowIcon />
              </button>
            </QuickPickCard>
          ))}
        </QuickPicksGrid>
      </GoodAfternoon>

      <Box mb={5}>
        <SectionHeader>
          <h2>Made For You</h2>
          <span className="show-all">Show all</span>
        </SectionHeader>
        <SectionGrid>
          {madeForYou.slice(0, 6).map((song, index) => (
            <Card key={`made-${index}`} onClick={() => playAlbum(madeForYou, index)}>
              <div className="image-container">
                <img src={song.coverImage} alt={song.album.title} />
                <button className="play-btn" onClick={(e) => { e.stopPropagation(); playAlbum(madeForYou, index); }}>
                  <PlayArrowIcon />
                </button>
              </div>
              <div className="card-info">
                <h3>{song.album.title}</h3>
                <p>Made for you based on your listening history</p>
              </div>
            </Card>
          ))}
        </SectionGrid>
      </Box>

      <Box mb={5}>
        <SectionHeader>
          <h2>Recently Played</h2>
          <span className="show-all">Show all</span>
        </SectionHeader>
        <SectionGrid>
          {recentlyPlayed.slice(0, 6).map((song, index) => (
            <Card key={`recent-${index}`} onClick={() => playAlbum(recentlyPlayed, index)}>
              <div className="image-container">
                <img src={song.coverImage} alt={song.album.title} />
                <button className="play-btn" onClick={(e) => { e.stopPropagation(); playAlbum(recentlyPlayed, index); }}>
                  <PlayArrowIcon />
                </button>
              </div>
              <div className="card-info">
                <h3>{song.album.title}</h3>
                <p>{song.artist.name}</p>
              </div>
            </Card>
          ))}
        </SectionGrid>
      </Box>

      <Box mb={5}>
        <SectionHeader>
          <h2>Top Mixes</h2>
          <span className="show-all">Show all</span>
        </SectionHeader>
        <SectionGrid>
          {topMixes.slice(0, 6).map((song, index) => (
            <Card key={`mix-${index}`} onClick={() => playAlbum(topMixes, index)}>
              <div className="image-container">
                <img src={song.coverImage} alt={song.album.title} />
                <button className="play-btn" onClick={(e) => { e.stopPropagation(); playAlbum(topMixes, index); }}>
                  <PlayArrowIcon />
                </button>
              </div>
              <div className="card-info">
                <h3>{song.album.title}</h3>
                <p>{song.artist.name}</p>
              </div>
            </Card>
          ))}
        </SectionGrid>
      </Box>

      <Box mb={5}>
        <SectionHeader>
          <h2>Featured Charts</h2>
          <span className="show-all">Show all</span>
        </SectionHeader>
        <SectionGrid>
          {featuredSongs.slice(0, 6).map((song, index) => (
            <Card key={`featured-${index}`} onClick={() => playAlbum(featuredSongs, index)}>
              <div className="image-container">
                <img src={song.coverImage} alt={song.album.title} />
                <button className="play-btn" onClick={(e) => { e.stopPropagation(); playAlbum(featuredSongs, index); }}>
                  <PlayArrowIcon />
                </button>
              </div>
              <div className="card-info">
                <h3>{song.album.title}</h3>
                <p>{song.artist.name}</p>
              </div>
            </Card>
          ))}
        </SectionGrid>
      </Box>
    </HomeContainer>
  );
}

export default Home;
