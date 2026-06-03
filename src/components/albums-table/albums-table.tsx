import React, { useState } from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { AlbumsTableContainer, TableHeader, TableRow } from "./styles/ablums-table.style";
import { usePlayer } from "../../context/PlayerContext";
import { Song } from "../../types/music";
import { formatDuration } from "../../data/mockData";

interface AlbumsTableProps {
    songs: Song[];
    loading?: boolean;
}

const AlbumsTable: React.FC<AlbumsTableProps> = ({ songs, loading }) => {
    const { currentSong, isPlaying, playAlbum, togglePlay } = usePlayer();
    const [hoveredSong, setHoveredSong] = useState<string | null>(null);
    const [likedSongs, setLikedSongs] = useState<Set<string>>(new Set());

    const handlePlaySong = (index: number) => {
        if (currentSong?.id === songs[index].id && isPlaying) {
            togglePlay();
        } else {
            playAlbum(songs, index);
        }
    };

    const toggleLike = (e: React.MouseEvent, songId: string) => {
        e.stopPropagation();
        setLikedSongs(prev => {
            const newSet = new Set(prev);
            if (newSet.has(songId)) {
                newSet.delete(songId);
            } else {
                newSet.add(songId);
            }
            return newSet;
        });
    };

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" padding={4}>
                <CircularProgress color="primary" />
            </Box>
        );
    }

    return (
        <AlbumsTableContainer>
            <TableHeader>
                <span>#</span>
                <span>Title</span>
                <span>Album</span>
                <span><AccessTimeIcon fontSize="small" /></span>
            </TableHeader>

            {songs.map((song, index) => {
                const isCurrentSong = currentSong?.id === song.id;
                const isThisSongPlaying = isCurrentSong && isPlaying;
                const isHovered = hoveredSong === song.id;
                const isLiked = likedSongs.has(song.id);

                return (
                    <TableRow
                        key={song.id}
                        isPlaying={isCurrentSong}
                        isHovered={isHovered}
                        onMouseEnter={() => setHoveredSong(song.id)}
                        onMouseLeave={() => setHoveredSong(null)}
                        onClick={() => handlePlaySong(index)}
                    >
                        <div className="cell">
                            <span className="row-number">{index + 1}</span>
                            {isThisSongPlaying ? (
                                <PauseIcon className="play-icon" sx={{ fontSize: 18, color: '#1db954' }} />
                            ) : (
                                <PlayArrowIcon className="play-icon" sx={{ fontSize: 18, color: '#fff' }} />
                            )}
                        </div>

                        <div className="cell song-cell">
                            <img 
                                src={song.coverImage} 
                                alt={song.title} 
                                className="song-image"
                            />
                            <div className="song-info">
                                <div className="song-title">{song.title}</div>
                                <div className="song-artist">{song.artist.name}</div>
                            </div>
                        </div>

                        <div className="cell album-cell">
                            {song.album.title}
                        </div>

                        <div className="cell duration-cell">
                            <span className="duration">{formatDuration(song.duration)}</span>
                            <div className="duration-actions">
                                <button 
                                    className={`action-btn ${isLiked ? 'liked' : ''}`}
                                    onClick={(e) => toggleLike(e, song.id)}
                                >
                                    {isLiked ? (
                                        <FavoriteIcon fontSize="small" />
                                    ) : (
                                        <FavoriteBorderOutlinedIcon fontSize="small" />
                                    )}
                                </button>
                                <button className="action-btn">
                                    <MoreHorizOutlinedIcon fontSize="small" />
                                </button>
                            </div>
                        </div>
                    </TableRow>
                );
            })}
        </AlbumsTableContainer>
    );
};

export default AlbumsTable;
