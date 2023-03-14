import React from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { HomeContainer } from "./styles/home.style";
import SpAlbumCard from "../../shared/album-card/album-card";
import Category from "../../components/category/category";
import PeriodCategories from "../../components/period-categories/period-categories";
import SpPeriodCard from "../../shared/period-card/period-card";

import musicAlbum from "../../assets/images/music_album_banner.webp";
import vibeMusic from "../../assets/images/vibe_music.webp";
import listeningVibeMusic from "../../assets/images/listening_vibe_music.webp";
import joyfulMelody from "../../assets/images/joyful_melody.webp";
import guyMusic from "../../assets/images/guy_music.webp";
import redGirl from "../../assets/images/red_girl.webp";

const Home = () => {
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
            id: 'p1',
            image: guyMusic,
            title: 'Daily Mix 1'
        },
        {
            id: 'p2',
            image: redGirl,
            title: 'Daily Mix 2'
        },
        {
            id: 'p3',
            image: musicAlbum,
            title: 'Daily Mix 3'
        },
        {
            id: 'p4',
            image: joyfulMelody,
            title: 'Daily Mix 4'
        },
        {
            id: 'p5',
            image: vibeMusic,
            title: 'Daily Mix 5'
        },
    ];

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
                                <SpAlbumCard
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
                                <SpAlbumCard
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
                                <SpAlbumCard
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
                                <SpAlbumCard
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
                                <SpAlbumCard
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
                                <SpAlbumCard
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
