import React, { useState } from 'react';
import UiDrawer from "../../components/drawer/ui-drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Outlet } from "react-router-dom";

const drawerWidth = 240;

const Dashboard = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box sx={{display: 'flex'}}>
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: '#212121',
                    width: {sm: `calc(100% - ${drawerWidth}px)`},
                    ml: {sm: `${drawerWidth}px`},
                }}
            >
                <Toolbar>
                    <Grid container spacing={2} justifyContent="space-between">
                        <Grid item>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{display: {sm: 'none'}}}
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Grid container>
                                <Grid item>
                                    <IconButton>
                                        <ChevronLeftIcon sx={{color: 'white'}}/>
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <IconButton>
                                        <ChevronRightIcon sx={{color: 'white'}}/>
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" noWrap component="div">
                                Account UI here
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <UiDrawer
                onDrawToggleHandler={handleDrawerToggle}
                onMobileOpen={mobileOpen}
                drawerWidth={drawerWidth}
            />
            <Box
                component="main"
                sx={{flexGrow: 1, p: 3, width: {sm: `calc(100% - ${drawerWidth}px)`}}}
            >
                <Toolbar/>
                <Outlet/>
            </Box>
        </Box>
    );
}

export default Dashboard;
