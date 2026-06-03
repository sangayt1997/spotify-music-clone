import React, { useState } from "react";
import spotifyBlackLogo from "../../assets/logo/spotify_black_logo.png";
import { Link } from "react-router-dom";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import { AlbumsHeaderContainer, ActionBar, PlayButton, ActionButton } from "./styles/ablums-header.style";
import { usePlayer } from "../../context/PlayerContext";
import { Song } from "../../types/music";

interface AlbumHeaderProps {
    albumCategories?: string;
    albumTitle: string;
    albumDescription?: string;
    likes?: string;
    totalSong?: string;
    songsDuration?: string;
    imageUrl?: string;
    songs?: Song[];
}

const AlbumHeader = (props: AlbumHeaderProps) => {
    const { currentSong, isPlaying, playAlbum, togglePlay, shuffle, toggleShuffle } = usePlayer();
    const [isFav, setIsFav] = useState(false);

    const isAlbumPlaying = props.songs?.some(song => song.id === currentSong?.id && isPlaying) ?? false;

    const playBtnHandler = () => {
        if (props.songs && props.songs.length > 0) {
            if (isAlbumPlaying) {
                togglePlay();
            } else {
                playAlbum(props.songs);
            }
        }
    };

    const pauseBtnHandler = () => {
        togglePlay();
    };

    const toggleFavHandler = () => {
        setIsFav(prevState => !prevState);
    };

    return (
        <AlbumsHeaderContainer>
            <div className="header-content">
                <img
                    src={props.imageUrl || "https://picsum.photos/400/400"}
                    alt={props.albumTitle}
                    className="album-image"
                />
                <div className="header-info">
                    <span className="type">{props.albumCategories || 'Album'}</span>
                    <h1>{props.albumTitle}</h1>
                    {props.albumDescription && (
                        <p className="description">{props.albumDescription}</p>
                    )}
                    <div className="meta">
                        <img
                            src={spotifyBlackLogo}
                            alt="Spotify"
                            style={{ width: 20, height: 20 }}
                        />
                        <Link to="/">Spotify</Link>
                        <span className="dot">•</span>
                        {props.likes && <span>{props.likes}</span>}
                        {props.likes && <span className="dot">•</span>}
                        {props.totalSong && <span>{props.totalSong}</span>}
                        {props.totalSong && props.songsDuration && <span className="dot">•</span>}
                        {props.songsDuration && <span>about {props.songsDuration}</span>}
                    </div>
                </div>
            </div>

            <ActionBar>
                <PlayButton onClick={isAlbumPlaying ? pauseBtnHandler : playBtnHandler}>
                    {isAlbumPlaying ? (
                        <PauseIcon />
                    ) : (
                        <PlayArrowIcon />
                    )}
                </PlayButton>
                
                <ActionButton onClick={toggleShuffle} className={shuffle ? 'active' : ''}>
                    <ShuffleIcon sx={{ fontSize: 32 }} />
                </ActionButton>
                
                <ActionButton onClick={toggleFavHandler} className={isFav ? 'active' : ''}>
                    {isFav ? (
                        <FavoriteIcon sx={{ fontSize: 32 }} />
                    ) : (
                        <FavoriteBorderOutlinedIcon sx={{ fontSize: 32 }} />
                    )}
                </ActionButton>
                
                <ActionButton>
                    <MoreHorizOutlinedIcon sx={{ fontSize: 32 }} />
                </ActionButton>
            </ActionBar>
        </AlbumsHeaderContainer>
    );
}

export default AlbumHeader;
