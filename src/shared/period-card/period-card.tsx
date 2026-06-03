import React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { PeriodCard, PeriodCardContent } from "./styles/period-card.style";
import { Link } from "react-router-dom";
import { usePlayer } from "../../context/PlayerContext";
import { Song } from "../../types/music";

interface SpPeriodCardProps {
    image?: string,
    title?: string,
    songs?: Song[],
}

const SpPeriodCard = (props: SpPeriodCardProps) => {
    const { currentSong, isPlaying, playAlbum, togglePlay } = usePlayer();

    // Check if any song from this playlist is currently playing
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
        <Link to="/:id" className="text-decoration--none">
            <PeriodCard>
                <PeriodCardContent>
                    <img src={props.image} alt="music album" loading="lazy"/>
                    <h2>{props.title}</h2>
                </PeriodCardContent>
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
            </PeriodCard>
        </Link>
    )
}

export default SpPeriodCard;
