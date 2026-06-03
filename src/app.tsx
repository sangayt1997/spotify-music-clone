import React from 'react';
import Box from "@mui/material/Box";
import Navigation from "./navigation/navigation";
import { PlayerProvider } from "./context/PlayerContext";

function App() {
    return (
        <PlayerProvider>
            <Box sx={{ backgroundColor: '#121212', minHeight: '100vh' }}>
                <Navigation/>
            </Box>
        </PlayerProvider>
    );
}

export default App;
