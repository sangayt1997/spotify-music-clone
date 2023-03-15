import React, { useState } from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { PeriodCard, PeriodCardContent } from "./styles/period-card.style";

interface SpPeriodCardProps {
    image?: string,
    title?: string,
}

const SpPeriodCard = (props: SpPeriodCardProps) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const playBtnHandler = () => {
        setIsPlaying(true);
    }

    const pauseBtnHandler = () => {
        setIsPlaying(false);
    };

    return (
        <PeriodCard>
            <PeriodCardContent>
                <img src={props.image} alt="music album" loading="lazy"/>
                <h2>{props.title}</h2>
            </PeriodCardContent>
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
        </PeriodCard>
    )
}

export default SpPeriodCard;
