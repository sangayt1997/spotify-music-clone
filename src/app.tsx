import React from 'react';
import Box from "@mui/material/Box";
import Dashboard from "./pages/dashboard/dashboard";

function App() {
    return (
        <Box sx={{minHeight: '100vh', backgroundColor: '#212121'}}>
            <Dashboard />
        </Box>
    );
}

export default App;
