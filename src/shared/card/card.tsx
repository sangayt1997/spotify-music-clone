import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Fab } from "@mui/material";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Card, CardContent } from "./styles/card.style";

interface SpCardProps {
    image?: string | undefined,
    title?: string,
    description?: string

}
const SpCard = (props: SpCardProps) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const playBtnHandler = () => {
        setIsPlaying(true);
    }

    const pauseBtnHandler = () => {
        setIsPlaying(false);
    };

    return(
        <Card>
            <Box className="image-wrapper">
                <img src={props.image} alt="music album"/>
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
            <CardContent>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </CardContent>
        </Card>
    )
}

export default SpCard;
