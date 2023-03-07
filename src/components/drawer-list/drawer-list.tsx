import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home"
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import ListItemText from "@mui/material/ListItemText";

const UiDrawerList = () => {
    const DrawerList = [
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
    return (
        <div>
            <List>
                {DrawerList.map((item, index) => (
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
        </div>
    )
}

export default UiDrawerList;
