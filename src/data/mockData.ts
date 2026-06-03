import { Artist, Album, Song } from "../types/music";

export const mockArtists: Artist[] = [
  {
    id: "a1",
    name: "OneRepublic",
    image:
      "https://res.cloudinary.com/dsim60jne/image/upload/v1678884847/spotify-clone/listening_vibe_music_fjzqxl.webp",
  },
  {
    id: "a2",
    name: "The Chainsmokers",
    image:
      "https://res.cloudinary.com/dsim60jne/image/upload/v1678884961/spotify-clone/red_girl_cwefa0.webp",
  },
  {
    id: "a3",
    name: "Calvin Harris",
    image:
      "https://res.cloudinary.com/dsim60jne/image/upload/v1678884897/spotify-clone/music_album_banner_m6is6d.webp",
  },
  {
    id: "a4",
    name: "Eminem",
    image:
      "https://res.cloudinary.com/dsim60jne/image/upload/v1678885024/spotify-clone/vibe_music_jcfe9r.webp",
  },
  {
    id: "a5",
    name: "Adele",
    image:
      "https://res.cloudinary.com/dsim60jne/image/upload/v1678884764/spotify-clone/joyful_melody_l9bbpd.webp",
  },
];

export const mockAlbums: Album[] = [
  {
    id: "al1",
    title: "Native",
    image:
      "https://res.cloudinary.com/dsim60jne/image/upload/v1678884847/spotify-clone/listening_vibe_music_fjzqxl.webp",
    artist: mockArtists[0],
    releaseDate: "2013-03-22",
  },
  {
    id: "al2",
    title: "Memories",
    image:
      "https://res.cloudinary.com/dsim60jne/image/upload/v1678884961/spotify-clone/red_girl_cwefa0.webp",
    artist: mockArtists[1],
    releaseDate: "2019-12-06",
  },
  {
    id: "al3",
    title: "Funk Wav Bounces Vol. 2",
    image:
      "https://res.cloudinary.com/dsim60jne/image/upload/v1678884897/spotify-clone/music_album_banner_m6is6d.webp",
    artist: mockArtists[2],
    releaseDate: "2022-01-07",
  },
  {
    id: "al4",
    title: "Revival",
    image:
      "https://res.cloudinary.com/dsim60jne/image/upload/v1678885024/spotify-clone/vibe_music_jcfe9r.webp",
    artist: mockArtists[3],
    releaseDate: "2017-12-05",
  },
  {
    id: "al5",
    title: "25",
    image:
      "https://res.cloudinary.com/dsim60jne/image/upload/v1678884764/spotify-clone/joyful_melody_l9bbpd.webp",
    artist: mockArtists[4],
    releaseDate: "2015-11-20",
  },
];

// Working public audio URLs (verified)
const SAMPLE_AUDIO_URLS = [
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
  "https://filesamples.com/samples/audio/mp3/sample3.mp3",
  "https://filesamples.com/samples/audio/mp3/sample4.mp3",
];

export const mockSongs: Song[] = [
  {
    id: "s1",
    title: "Counting Stars",
    artist: mockArtists[0],
    album: mockAlbums[0],
    duration: 257,
    audioUrl: SAMPLE_AUDIO_URLS[0],
    coverImage:
      "https://res.cloudinary.com/dsim60jne/image/upload/v1678884847/spotify-clone/listening_vibe_music_fjzqxl.webp",
    dateAdded: "1 week ago",
  },
  {
    id: "s2",
    title: "Apologize",
    artist: mockArtists[0],
    album: mockAlbums[0],
    duration: 198,
    audioUrl: SAMPLE_AUDIO_URLS[1],
    coverImage:
      "https://res.cloudinary.com/dsim60jne/image/upload/v1678884847/spotify-clone/listening_vibe_music_fjzqxl.webp",
    dateAdded: "1 week ago",
  },
  {
    id: "s3",
    title: "Stop Talking",
    artist: mockArtists[1],
    album: mockAlbums[1],
    duration: 189,
    audioUrl: SAMPLE_AUDIO_URLS[2],
    coverImage:
      "https://res.cloudinary.com/dsim60jne/image/upload/v1678884961/spotify-clone/red_girl_cwefa0.webp",
    dateAdded: "2 weeks ago",
  },
  {
    id: "s4",
    title: "Call You Mine",
    artist: mockArtists[1],
    album: mockAlbums[1],
    duration: 218,
    audioUrl: SAMPLE_AUDIO_URLS[3],
    coverImage:
      "https://res.cloudinary.com/dsim60jne/image/upload/v1678884961/spotify-clone/red_girl_cwefa0.webp",
    dateAdded: "2 weeks ago",
  },
  {
    id: "s5",
    title: "Summer",
    artist: mockArtists[2],
    album: mockAlbums[2],
    duration: 223,
    audioUrl: SAMPLE_AUDIO_URLS[4],
    coverImage:
      "https://res.cloudinary.com/dsim60jne/image/upload/v1678884897/spotify-clone/music_album_banner_m6is6d.webp",
    dateAdded: "3 weeks ago",
  },
  {
    id: "s6",
    title: "This Is What You Came For",
    artist: mockArtists[2],
    album: mockAlbums[2],
    duration: 227,
    audioUrl: SAMPLE_AUDIO_URLS[5],
    coverImage:
      "https://res.cloudinary.com/dsim60jne/image/upload/v1678884897/spotify-clone/music_album_banner_m6is6d.webp",
    dateAdded: "3 weeks ago",
  },
  {
    id: "s7",
    title: "Lose Yourself",
    artist: mockArtists[3],
    album: mockAlbums[3],
    duration: 326,
    audioUrl: SAMPLE_AUDIO_URLS[6],
    coverImage:
      "https://res.cloudinary.com/dsim60jne/image/upload/v1678885024/spotify-clone/vibe_music_jcfe9r.webp",
    dateAdded: "1 month ago",
  },
  {
    id: "s8",
    title: "Not Afraid",
    artist: mockArtists[3],
    album: mockAlbums[3],
    duration: 293,
    audioUrl: SAMPLE_AUDIO_URLS[7],
    coverImage:
      "https://res.cloudinary.com/dsim60jne/image/upload/v1678885024/spotify-clone/vibe_music_jcfe9r.webp",
    dateAdded: "1 month ago",
  },
  {
    id: "s9",
    title: "Hello",
    artist: mockArtists[4],
    album: mockAlbums[4],
    duration: 295,
    audioUrl: SAMPLE_AUDIO_URLS[8],
    coverImage:
      "https://res.cloudinary.com/dsim60jne/image/upload/v1678884764/spotify-clone/joyful_melody_l9bbpd.webp",
    dateAdded: "2 months ago",
  },
  {
    id: "s10",
    title: "Someone Like You",
    artist: mockArtists[4],
    album: mockAlbums[4],
    duration: 285,
    audioUrl: SAMPLE_AUDIO_URLS[9],
    coverImage:
      "https://res.cloudinary.com/dsim60jne/image/upload/v1678884764/spotify-clone/joyful_melody_l9bbpd.webp",
    dateAdded: "2 months ago",
  },
  {
    id: "s11",
    title: "apologize",
    artist: mockArtists[0],
    album: mockAlbums[0],
    duration: 198,
    audioUrl: SAMPLE_AUDIO_URLS[10],
    coverImage:
      "https://res.cloudinary.com/dsim60jne/image/upload/v1678884764/spotify-clone/joyful_melody_l9bbpd.webp",
    dateAdded: "2 weeks ago",
  },
  {
    id: "s12",
    title: "apologize",
    artist: mockArtists[0],
    album: mockAlbums[0],
    duration: 198,
    audioUrl: SAMPLE_AUDIO_URLS[11],
    coverImage:
      "https://res.cloudinary.com/dsim60jne/image/upload/v1678884665/spotify-clone/guy_music_eatj4r.webp",
    dateAdded: "2 weeks ago",
  },
];

export const formatDuration = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};
