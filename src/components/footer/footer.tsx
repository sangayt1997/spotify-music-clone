import React from "react";
import { FooterContainer } from "./styles/footer.style";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Fab from "@mui/material/Fab";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <FooterContainer>
            <Box display="flex" flexDirection="row" justifyContent="space-between">
                <Stack direction="row" spacing={12}>
                    <Stack spacing={1}>
                        <h4>Company</h4>
                        <Link to="/">About</Link>
                        <Link to="/">Jobs</Link>
                        <Link to="/">For the Record</Link>
                    </Stack>
                    <Stack spacing={2}>
                        <h4>Communities</h4>
                        <Link to="/">For Artists</Link>
                        <Link to="/">Developers</Link>
                        <Link to="/">Advertising</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Vendors</Link>
                    </Stack>
                    <Stack spacing={2}>
                        <h4>Useful links</h4>
                        <Link to="/">Support</Link>
                        <Link to="/">Free Mobile App</Link>
                    </Stack>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <Fab size="small" className="social-fab">
                        <InstagramIcon fontSize="small" sx={{color: 'white'}}/>
                    </Fab>
                    <Fab size="small" className="social-fab">
                        <TwitterIcon fontSize="small" sx={{color: 'white'}}/>
                    </Fab>
                    <Fab size="small" className="social-fab">
                        <FacebookIcon fontSize="small" sx={{color: 'white'}}/>
                    </Fab>
                </Stack>
            </Box>
            <Divider sx={{
                borderColor: 'rgba(255,255,255,0.20)',
                my: '32px'
            }}/>
            <Box display="flex" flexDirection="row" justifyContent="space-between">
                <Stack direction="row" spacing={2}>
                    <Link to="/">Legal</Link>
                    <Link to="/">Privacy Center</Link>
                    <Link to="/">Privacy Policy</Link>
                    <Link to="/">Cookies</Link>
                    <Link to="/">About Ads</Link>
                </Stack>
                <p className="current-year">© {currentYear} Spotify Clone</p>
            </Box>
        </FooterContainer>
    );
}


export default Footer;
