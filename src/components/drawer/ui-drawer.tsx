import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import UiDrawerList from "../drawer-list/drawer-list";

const UiDrawer = (props: any) => {
    return (
        <Box
            component="nav"
            sx={{width: {sm: props.drawerWidth}, flexShrink: {sm: 0}}}
        >
            <Drawer
                variant="temporary"
                open={props.onMobileOpen}
                onClose={props.onDrawToggleHandler}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: {xs: 'block', sm: 'none'},
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: props.drawerWidth,
                        backgroundColor: 'black',
                        padding: ['0 8px']
                    },
                }}
            >
                <UiDrawerList/>
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: {xs: 'none', sm: 'block'},
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: props.drawerWidth,
                        backgroundColor: 'black',
                        padding: ['0 12px']
                    },
                }}
                open
            >
                <UiDrawerList/>
            </Drawer>
        </Box>
    );
}


export default UiDrawer;
