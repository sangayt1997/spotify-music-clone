import React from "react";
import Box from "@mui/material/Box";
import { Fab } from "@mui/material";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { AlbumCard, AlbumCardContent } from "./styles/album-card.style";
import { Link } from "react-router-dom";
import { usePlayer } from "../../context/PlayerContext";
import { Song } from "../../types/music";

interface SpAlbumCardProps {
    image?: string | undefined,
    title?: string,
    description?: string,
    songs?: Song[],
    onClick?: () => void;
}

const SpAlbumCard = (props: SpAlbumCardProps) => {
    const { currentSong, isPlaying, playAlbum, togglePlay } = usePlayer();

    // Check if any song from this card's playlist is currently playing
    const isCardPlaying = props.songs?.some(song => song.id === currentSong?.id && isPlaying) ?? false;

    const handlePlayClick = (event: { preventDefault: () => void; stopPropagation: () => void }) => {
        event.preventDefault();
        event.stopPropagation();

        if (props.songs && props.songs.length > 0) {
            if (isCardPlaying) {
                togglePlay();
            } else {
                playAlbum(props.songs);
            }
        }
    };

    return (
        <Link className="text-decoration--none" to="/:id">
            <AlbumCard>
                <Box className="image-wrapper">
                    <img src={props.image} alt="music album" loading="lazy"/>
                    <Box
                        className="show-fab"
                        position="absolute"
                        bottom={12}
                        right={12}
                    >
                        <Fab
                            color="primary"
                            size="medium"
                            onClick={handlePlayClick}
                        >
                            {isCardPlaying ? (
                                <PauseIcon
                                    sx={{
                                        height: 30,
                                        width: 30,
                                        color: "black"
                                    }}
                                />
                            ) : (
                                <PlayArrowIcon
                                    sx={{
                                        height: 30,
                                        width: 30,
                                        color: "black"
                                    }}
                                />
                            )}
                        </Fab>
                    </Box>
                </Box>
                <AlbumCardContent>
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                </AlbumCardContent>
            </AlbumCard>
        </Link>
    )
}

export default SpAlbumCard;
