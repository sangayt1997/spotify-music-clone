import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        common: {
            black: '#000000',
            white: '#FFFFFF',
        },
        primary: {
            light: '#4AC776',
            main: '#1DB954',
            dark: '#14813A',
            contrastText: '#FFFFFF',
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#FFFFFF',
            disabled: '#B2B2B2'
        }
    },
});

export default theme;
