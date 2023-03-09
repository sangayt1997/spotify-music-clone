import React from "react";
import Box from "@mui/material/Box";
import { Card, CardContent } from "../../shared/styles/components.style";
import dummyImage from "../../asset/images/spotify_text_image.png";

const Home = () => {

    return (
        <Box sx={{display: 'flex'}}>
            <Card>
                <img src={dummyImage} alt="dummy" />
                <CardContent>
                    <h2>fnsdfnnsfdfdjsn</h2>
                    <p>ndfsdfnfjdfnfnsdjf</p>
                </CardContent>
            </Card>
        </Box>
    );
}

export default Home;
