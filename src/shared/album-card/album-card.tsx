import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Fab } from "@mui/material";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { AlbumCard, AlbumCardContent } from "./styles/album-card.style";

interface SpAlbumCardProps {
    image?: string | undefined,
    title?: string,
    description?: string

}

const SpAlbumCard = (props: SpAlbumCardProps) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const playBtnHandler = () => {
        setIsPlaying(true);
    }

    const pauseBtnHandler = () => {
        setIsPlaying(false);
    };

    return (
        <AlbumCard>
            <Box className="image-wrapper">
                <img src={props.image} alt="music album" loading="lazy"/>
                <Box className="show-fab" position="absolute" bottom={12} right={12}>
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
    )
}

export default SpAlbumCard;
