import React from "react";
import SpCard from "../../shared/card/card";
import Grid from "@mui/material/Grid";
import { HomeContainer } from "./styles/home.style";
import Category from "../../components/category/category";
import { Stack } from "@mui/material";
import PeriodCategories from "../../components/period-categories/period-categories";
import SpPeriodCard from "../../shared/period-card/period-card";

import musicAlbum from "../../asset/images/music_album_banner.webp";
import vibeMusic from "../../asset/images/vibe_music.webp";
import listeningVibeMusic from "../../asset/images/listening_vibe_music.webp";
import joyfulMelody from "../../asset/images/joyful_melody.webp";
import guyMusic from "../../asset/images/guy_music.webp";
import redGirl from "../../asset/images/red_girl.webp";

const DummyMusicData = [
    {
        id: 'm1',
        image: musicAlbum,
        title: 'Daily Mix 1',
        description: 'The Chainsmokers, Calvin Harris, Flo Rida and more'
    },
    {
        id: 'm2',
        image: vibeMusic,
        title: 'Daily Mix 2',
        description: 'Sam Smith, Adele, Shawn Mendes and more'
    },
    {
        id: 'm3',
        image: listeningVibeMusic,
        title: 'Daily Mix 3',
        description: 'Eminem, Post Malone, The Kid LAROI and more'
    },
    {
        id: 'm4',
        image: joyfulMelody,
        title: 'Daily Mix 4',
        description: 'Ozuna, J Balvin, Myke Towers and more'
    },
    {
        id: 'm5',
        image: redGirl,
        title: 'Daily Mix 5',
        description: 'Mino, J Balvino, Myke Clock Tower, Ozuna, J Balvin, Myke Towers and more'
    },
];

const DummyPeriodMusic = [
    {
        id: 'm1',
        image: guyMusic,
        title: 'Daily Mix 1'
    },
    {
        id: 'm2',
        image: redGirl,
        title: 'Daily Mix 2'
    },
    {
        id: 'm3',
        image: musicAlbum,
        title: 'Daily Mix 3'
    },
    {
        id: 'm4',
        image: joyfulMelody,
        title: 'Daily Mix 4'
    },
    {
        id: 'm5',
        image: vibeMusic,
        title: 'Daily Mix 5'
    },
];

const Home = () => {
    return (
        <HomeContainer>
            <Stack spacing={2}>
                <PeriodCategories>
                    <Grid container spacing={2}>
                        {DummyPeriodMusic.map(item => (
                            <Grid item md={4} key={item.id}>
                                <SpPeriodCard
                                    image={item.image}
                                    title={item.title}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </PeriodCategories>
                <Category categoryTitle="Made for Sangay Thinley">
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
                </Category>
                <Category categoryTitle="Your top mixes">
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
                </Category>
                <Category categoryTitle="Recently played">
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
                </Category>
                <Category categoryTitle="Recommended radio">
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
                </Category>
                <Category categoryTitle="Spotify Playlists">
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
                </Category>
                <Category categoryTitle="Recommended for today">
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
                </Category>
            </Stack>
        </HomeContainer>
    );
}

export default Home;
