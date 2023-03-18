import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Fab } from "@mui/material";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { AlbumCard, AlbumCardContent } from "./styles/album-card.style";
import { Link } from "react-router-dom";

interface SpAlbumCardProps {
    image?: string | undefined,
    title?: string,
    description?: string

}

const SpAlbumCard = (props: SpAlbumCardProps) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const playBtnHandler = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setIsPlaying(true);
    }

    const pauseBtnHandler = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setIsPlaying(false);
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
                            onClick={isPlaying ? pauseBtnHandler : playBtnHandler}
                        >
                            {isPlaying ? (
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
