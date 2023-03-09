import React from "react";
import Box from "@mui/material/Box";
import SpCard from "../../shared/card/card";
import musicAlbum from "../../asset/images/music_album_banner.jpg";
import Grid from "@mui/material/Grid";

const DummyMusicData = [
    {
        image: musicAlbum,
        title: 'Daily Mix 1',
        description: 'The Chainsmokers, Calvin Harris, Flo Rida and more'
    },
    {
        image: musicAlbum,
        title: 'Daily Mix 2',
        description: 'Sam Smith, Adele, Shawn Mendes and more'
    },
    {
        image: musicAlbum,
        title: 'Daily Mix 3',
        description: 'Eminem, Post Malone, The Kid LAROI and more'
    },
    {
        image: musicAlbum,
        title: 'Daily Mix 4',
        description: 'Ozuna, J Balvin, Myke Towers and more'
    },
    {
        image: musicAlbum,
        title: 'Daily Mix 5',
        description: 'Mino, J Balvino, Myke Clock Tower and more'
    },
];

const Home = () => {
    return (
        <Box sx={{display: 'flex'}}>
            <Grid container spacing={2}>
                {DummyMusicData.map(item => (
                    <Grid item md={2.4}>
                        <SpCard
                            image={item.image}
                            title={item.title}
                            description={item.description}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Home;
