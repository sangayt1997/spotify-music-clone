import React from "react";
import SpCard from "../../shared/card/card";
import musicAlbum from "../../asset/images/music_album_banner.jpg";
import Grid from "@mui/material/Grid";
import { HomeContainer } from "./styles/home.style";

const DummyMusicData = [
    {
        id: 'm1',
        image: musicAlbum,
        title: 'Daily Mix 1',
        description: 'The Chainsmokers, Calvin Harris, Flo Rida and more'
    },
    {
        id: 'm2',
        image: musicAlbum,
        title: 'Daily Mix 2',
        description: 'Sam Smith, Adele, Shawn Mendes and more'
    },
    {
        id: 'm3',
        image: musicAlbum,
        title: 'Daily Mix 3',
        description: 'Eminem, Post Malone, The Kid LAROI and more'
    },
    {
        id: 'm4',
        image: musicAlbum,
        title: 'Daily Mix 4',
        description: 'Ozuna, J Balvin, Myke Towers and more'
    },
    {
        id: 'm5',
        image: musicAlbum,
        title: 'Daily Mix 5',
        description: 'Mino, J Balvino, Myke Clock Tower, Ozuna, J Balvin, Myke Towers and more'
    },
];

const Home = () => {
    return (
        <HomeContainer>
            <Grid container spacing={2}>
                {DummyMusicData.map(item => (
                    <Grid item md={2.4} key={item.id}>
                        <SpCard
                            image={item.image}
                            title={item.title}
                            description={item.description}
                        />
                    </Grid>
                ))}
            </Grid>
        </HomeContainer>
    );
}

export default Home;
