import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home"
import AddBoxIcon from '@mui/icons-material/AddBox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import spotifyTextLogo from "../../asset/logo/spotify_text_logo.png";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import DrawerList from "./style/drawer-list.style";

const UiDrawerList = () => {
    const PrimaryDrawerLists = [
        {
            title: 'Home',
            icon: <HomeIcon/>,
            navigate: '/home'
        },
        {
            title: 'Search',
            icon: <SearchIcon/>,
            navigate: '/search'
        },
        {
            title: 'Your Library',
            icon: <LibraryMusicIcon/>,
            navigate: '/your-library'
        },
    ];

    const SecondaryDrawerLists = [
        {
            title: 'Create Playlist',
            icon: <AddBoxIcon/>,
            navigate: '/create-playlist'
        },
        {
            title: 'Liked Songs',
            icon: <FavoriteIcon/>,
            navigate: '/liked-songs'
        },
    ];

    const DrawerLists = [
        {
            title: 'My Playlist #1'
        },
        {
            title: 'Top Songs - Global'
        }
    ];

    return (
        <DrawerList>
            <Box margin={'12px 8px'} alignItems="center" display="flex">
                <Link to="/home">
                    <img
                        src={spotifyTextLogo}
                        alt="logo"
                        height="40px"
                    />
                </Link>
            </Box>
            <List>
                {PrimaryDrawerLists.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <Link to={item.navigate}>
                            <ListItemButton>
                                <ListItemIcon sx={{color: 'white'}}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.title} sx={{color: 'white'}}/>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
            <List>
                {SecondaryDrawerLists.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <Link to={item.navigate}>
                            <ListItemButton>
                                <ListItemIcon sx={{color: 'white'}}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.title} sx={{color: 'white'}}/>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
            <Divider sx={{borderColor: '#FFFFFF99'}}/>
            <List>
                {DrawerLists.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={item.title} sx={{color: 'white'}}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </DrawerList>
    )
}

export default UiDrawerList;
