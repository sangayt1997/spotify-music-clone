import React from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { HomeContainer } from "./styles/home.style";
import SpAlbumCard from "../../shared/album-card/album-card";
import Category from "../../components/category/category";
import PeriodCategories from "../../components/period-categories/period-categories";
import SpPeriodCard from "../../shared/period-card/period-card";

const Home = () => {
    const DummyMusicData = [
        {
            id: 'm1',
            image: 'https://res.cloudinary.com/dsim60jne/image/upload/v1678884847/spotify-clone/listening_vibe_music_fjzqxl.webp',
            title: 'Daily Mix 1',
            description: 'The Chainsmokers, Calvin Harris, Flo Rida and more'
        },
        {
            id: 'm2',
            image: 'https://res.cloudinary.com/dsim60jne/image/upload/v1678884961/spotify-clone/red_girl_cwefa0.webp',
            title: 'Daily Mix 2',
            description: 'Sam Smith, Adele, Shawn Mendes and more'
        },
        {
            id: 'm3',
            image: 'https://res.cloudinary.com/dsim60jne/image/upload/v1678884897/spotify-clone/music_album_banner_m6is6d.webp',
            title: 'Daily Mix 3',
            description: 'Eminem, Post Malone, The Kid LAROI and more'
        },
        {
            id: 'm4',
            image: 'https://res.cloudinary.com/dsim60jne/image/upload/v1678885024/spotify-clone/vibe_music_jcfe9r.webp',
            title: 'Daily Mix 4',
            description: 'Ozuna, J Balvin, Myke Towers and more'
        },
        {
            id: 'm5',
            image: 'https://res.cloudinary.com/dsim60jne/image/upload/v1678884764/spotify-clone/joyful_melody_l9bbpd.webp',
            title: 'Daily Mix 5',
            description: 'Mino, J Balvino, Myke Clock Tower, Ozuna, J Balvin, Myke Towers and more'
        },
    ];

    const DummyPeriodMusic = [
        {
            id: 'p1',
            image: 'https://res.cloudinary.com/dsim60jne/image/upload/v1678884665/spotify-clone/guy_music_eatj4r.webp',
            title: 'Daily Mix 1'
        },
        {
            id: 'p2',
            image: 'https://res.cloudinary.com/dsim60jne/image/upload/v1678884961/spotify-clone/red_girl_cwefa0.webp',
            title: 'Daily Mix 2'
        },
        {
            id: 'p3',
            image: 'https://res.cloudinary.com/dsim60jne/image/upload/v1678884897/spotify-clone/music_album_banner_m6is6d.webp',
            title: 'Daily Mix 3'
        },
        {
            id: 'p4',
            image: 'https://res.cloudinary.com/dsim60jne/image/upload/v1678884764/spotify-clone/joyful_melody_l9bbpd.webp',
            title: 'Daily Mix 4'
        },
        {
            id: 'p5',
            image: 'https://res.cloudinary.com/dsim60jne/image/upload/v1678885024/spotify-clone/vibe_music_jcfe9r.webp',
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
