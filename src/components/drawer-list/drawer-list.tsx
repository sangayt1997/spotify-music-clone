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

const UiDrawerList = () => {
    const PrimaryDrawerLists = [
        {
            title: 'Home',
            icon: <HomeIcon/>
        },
        {
            title: 'Search',
            icon: <SearchIcon/>
        },
        {
            title: 'Your Library',
            icon: <LibraryMusicIcon/>
        },
    ];

    const SecondaryDrawerLists = [
        {
            title: 'Create Playlist',
            icon: <AddBoxIcon/>
        },
        {
            title: 'Liked Songs',
            icon: <FavoriteIcon/>
        },
    ];

    const DrawerLists = [
        {
            title: 'My Playlist #1'
        },
        {
            title: 'Top Songs-Global'
        }
    ];

    return (
        <div>
            <List>
                {PrimaryDrawerLists.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <ListItemIcon sx={{color: 'white'}}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.title} sx={{color: 'white'}}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <List>
                {SecondaryDrawerLists.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <ListItemIcon sx={{color: 'white'}}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.title} sx={{color: 'white'}}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider sx={{borderColor: 'white'}}/>

            <List>
                {DrawerLists.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={item.title} sx={{color: 'white'}}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    )
}

export default UiDrawerList;
