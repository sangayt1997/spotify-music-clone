import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import spotifyBlackLogo from "../../assets/logo/spotify_black_logo.png";
import { Link } from "react-router-dom";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Fab from "@mui/material/Fab";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FavoriteIcon from '@mui/icons-material/Favorite';
import SpTooltip from "../../shared/tooltip/tooltip";
import { AlbumsHeaderContainer } from "./styles/ablums-header.style";

interface AlbumHeaderProps {
    albumCategories: string;
    albumTitle: string;
    albumDescription: string;
    likes: string;
    totalSong: string;
    songsDuration: string;

}

const AlbumHeader = (props: AlbumHeaderProps) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isFav, setIsFav] = useState(false);

    const playBtnHandler = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setIsPlaying(true);
    }

    const pauseBtnHandler = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setIsPlaying(false);
    };

    const toggleFavHandler = () => {
        setIsFav(prevState => !prevState);
    }

    return (
        <AlbumsHeaderContainer>
            <Stack direction="row" spacing={4}>
                <img
                    src="https://res.cloudinary.com/dsim60jne/image/upload/v1678884847/spotify-clone/listening_vibe_music_fjzqxl.webp"
                    alt="album header"
                    width="240"
                    height="240"
                    className="album-image"
                />
                <Stack
                    display="flex"
                    flexDirection="column"
                    alignSelf="flex-end"
                >
                    <p className="fw-700 fs-14">{props.albumCategories}</p>
                    <h1 className="fs-96 lh-small">{props.albumTitle}</h1>
                    <Stack className="fs-14">
                        <p>{props.albumDescription}</p>
                        <Stack direction="row" alignItems="center">
                            <img
                                src={spotifyBlackLogo}
                                alt="album logo"
                                width="30"
                                height="30"
                            />
                            <Link to="/" className="fw-700">Spotify.</Link>
                            <p>{props.likes}. {props.totalSong},&nbsp;</p>
                            <p className="color--gray">about {props.songsDuration}</p>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Stack direction="row" spacing={4} paddingY="32px" alignItems="center">
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
                <SpTooltip title="Save to your library">
                    <div onClick={toggleFavHandler}>
                        {!isFav ?
                            <FavoriteBorderOutlinedIcon
                                fontSize="large"
                                className="icon-hover"
                            /> :
                            <FavoriteIcon fontSize="large" color="primary"/>
                        }
                    </div>
                </SpTooltip>
                <SpTooltip title="More options">
                    <MoreHorizOutlinedIcon
                        fontSize="large"
                        className="icon-hover"
                    />
                </SpTooltip>
            </Stack>
        </AlbumsHeaderContainer>
    );
}


export default AlbumHeader;
