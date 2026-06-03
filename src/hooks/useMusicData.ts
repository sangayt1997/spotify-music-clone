import { useState, useEffect, useCallback } from 'react';
import { Song } from '../types/music';
import {
  fetchPopularSongs,
  fetchSongsByGenre,
  convertITunesTrackToSong,
  ITunesTrack
} from '../services/iTunesApi';

// Genre categories for the home page
export const GENRE_CATEGORIES = [
  { id: 'pop', name: 'Pop Hits', term: 'pop music' },
  { id: 'rock', name: 'Rock Classics', term: 'rock music' },
  { id: 'hiphop', name: 'Hip Hop', term: 'hip hop music' },
  { id: 'electronic', name: 'Electronic', term: 'electronic music' },
  { id: 'country', name: 'Country', term: 'country music' },
  { id: 'jazz', name: 'Jazz', term: 'jazz music' },
  { id: 'classical', name: 'Classical', term: 'classical music' },
  { id: 'rnb', name: 'R&B', term: 'r&b music' },
  { id: 'latin', name: 'Latin', term: 'latin music' },
  { id: 'indie', name: 'Indie', term: 'indie music' },
];

interface UseMusicDataReturn {
  songs: Song[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const useMusicData = (category?: string, term?: string): UseMusicDataReturn => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSongs = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      let tracks: ITunesTrack[] = [];

      if (term) {
        tracks = await fetchSongsByGenre(term, 20);
      } else if (category) {
        tracks = await fetchPopularSongs(category, 20);
      } else {
        // Fetch a mix of popular songs
        const [pop, rock, hiphop] = await Promise.all([
          fetchSongsByGenre('pop hits', 10),
          fetchSongsByGenre('rock classics', 10),
          fetchSongsByGenre('hip hop', 10),
        ]);
        tracks = [...pop, ...rock, ...hiphop];
      }

      const convertedSongs = tracks.map((track, index) =>
        convertITunesTrackToSong(track, index)
      );

      setSongs(convertedSongs);
    } catch (err) {
      setError('Failed to load songs. Please try again.');
      console.error('Error fetching songs:', err);
    } finally {
      setLoading(false);
    }
  }, [category, term]);

  useEffect(() => {
    fetchSongs();
  }, [fetchSongs]);

  return { songs, loading, error, refetch: fetchSongs };
};

// Hook for featured/recommended songs
export const useFeaturedSongs = () => {
  return useMusicData('top songs');
};

// Hook for playlist-like data
export const usePlaylistSongs = (playlistName: string) => {
  return useMusicData(undefined, playlistName);
};

// Default songs for initial state (fallback)
export const getDefaultSongs = (): Song[] => [
  {
    id: 'default-1',
    title: 'Blinding Lights',
    artist: { id: 'a1', name: 'The Weeknd' },
    album: { id: 'al1', title: 'After Hours', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f3/37/bb/f337bb40-ec26-33e0-7818-ea1f2f79f6a5/190295716547_cover.jpg/300x300bb.jpg', artist: { id: 'a1', name: 'The Weeknd' } },
    duration: 200,
    audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/77/83/43/7783430d-f61f-9a82-6a84-d14f8f2cff0a/mzaf_14666998201781995061.plus.aac.p.m4a',
    coverImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f3/37/bb/f337bb40-ec26-33e0-7818-ea1f2f79f6a5/190295716547_cover.jpg/300x300bb.jpg',
    dateAdded: 'Recently added'
  },
  {
    id: 'default-2',
    title: 'Shape of You',
    artist: { id: 'a2', name: 'Ed Sheeran' },
    album: { id: 'al2', title: '÷ (Divide)', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/5c/09/17/5c09179f-9776-e6df-6f54-0a23e47e5f4d/190295813983_cover.jpg/300x300bb.jpg', artist: { id: 'a2', name: 'Ed Sheeran' } },
    duration: 233,
    audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/84/44/00/844400fc-26a3-7d8a-4c61-bf36-e41c37b6d2e8/mzaf_7160033498891759019.plus.aac.p.m4a',
    coverImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/5c/09/17/5c09179f-9776-e6df-6f54-0a23e47e5f4d/190295813983_cover.jpg/300x300bb.jpg',
    dateAdded: 'Recently added'
  },
  {
    id: 'default-3',
    title: 'Dance Monkey',
    artist: { id: 'a3', name: 'Tones and I' },
    album: { id: 'al3', title: 'The Kids Are Coming', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/8b/d4/00/8bd40079-e8d5-52d8-fb68-e3a3d09c07dd/190295632171_cover.jpg/300x300bb.jpg', artist: { id: 'a3', name: 'Tones and I' } },
    duration: 209,
    audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/fb/f4/b3/fbf4b3e8-8a82-e3b8-3e7a-05c3c26a4d24/mzaf_13399982399900999963.plus.aac.p.m4a',
    coverImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/8b/d4/00/8bd40079-e8d5-52d8-fb68-e3a3d09c07dd/190295632171_cover.jpg/300x300bb.jpg',
    dateAdded: 'Recently added'
  },
  {
    id: 'default-4',
    title: 'Levitating',
    artist: { id: 'a4', name: 'Dua Lipa' },
    album: { id: 'al4', title: 'Future Nostalgia', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/5f/a3/f3/5fa3f34e-4d93-2d70-98a6-32c54a94248e/190295816407_cover.jpg/300x300bb.jpg', artist: { id: 'a4', name: 'Dua Lipa' } },
    duration: 203,
    audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/5a/a8/2f/5aa82fe7-fd2f-e7aa-6275-8c7c3ad45e01/mzaf_13357660994900094931.plus.aac.p.m4a',
    coverImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/5f/a3/f3/5fa3f34e-4d93-2d70-98a6-32c54a94248e/190295816407_cover.jpg/300x300bb.jpg',
    dateAdded: 'Recently added'
  },
  {
    id: 'default-5',
    title: 'Bad Guy',
    artist: { id: 'a5', name: 'Billie Eilish' },
    album: { id: 'al5', title: 'WHEN WE ALL FALL ASLEEP', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/f0/04/f0/f004f0a9-e4c6-e7f6-f8d0-9c4e7c3c8f3e/190295632171_cover.jpg/300x300bb.jpg', artist: { id: 'a5', name: 'Billie Eilish' } },
    duration: 194,
    audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/f0/04/f0/f004f0a9-e4c6-e7f6-f8d0-9c4e7c3c8f3e/mzaf_13399982399900999963.plus.aac.p.m4a',
    coverImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/f0/04/f0/f004f0a9-e4c6-e7f6-f8d0-9c4e7c3c8f3e/190295632171_cover.jpg/300x300bb.jpg',
    dateAdded: 'Recently added'
  },
  {
    id: 'default-6',
    title: 'Uptown Funk',
    artist: { id: 'a6', name: 'Bruno Mars' },
    album: { id: 'al6', title: 'Uptown Special', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/9c/8f/75/9c8f750f-7b4c-9e0c-0c3c-3c8f4e5d6a7b/190295632171_cover.jpg/300x300bb.jpg', artist: { id: 'a6', name: 'Bruno Mars' } },
    duration: 269,
    audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/9c/8f/75/9c8f750f-7b4c-9e0c-0c3c-3c8f4e5d6a7b/mzaf_13399982399900999963.plus.aac.p.m4a',
    coverImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/9c/8f/75/9c8f750f-7b4c-9e0c-0c3c-3c8f4e5d6a7b/190295632171_cover.jpg/300x300bb.jpg',
    dateAdded: 'Recently added'
  },
  {
    id: 'default-7',
    title: 'Shallow',
    artist: { id: 'a7', name: 'Lady Gaga' },
    album: { id: 'al7', title: 'A Star Is Born', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/8a/9f/7b/8a9f7b5e-4e5d-4e5d-9e5d-4e5d9e5d4e5d/190295632171_cover.jpg/300x300bb.jpg', artist: { id: 'a7', name: 'Lady Gaga' } },
    duration: 216,
    audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/8a/9f/7b/8a9f7b5e-4e5d-4e5d-9e5d-4e5d9e5d4e5d/mzaf_13399982399900999963.plus.aac.p.m4a',
    coverImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/8a/9f/7b/8a9f7b5e-4e5d-4e5d-9e5d-4e5d9e5d4e5d/190295632171_cover.jpg/300x300bb.jpg',
    dateAdded: 'Recently added'
  },
  {
    id: 'default-8',
    title: 'Someone You Loved',
    artist: { id: 'a8', name: 'Lewis Capaldi' },
    album: { id: 'al8', title: 'Divinely Uninspired', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/4a/4f/8e/4a4f8e4a-4e4e-4e4e-9e4e-4e4e4e4e4e4/190295632171_cover.jpg/300x300bb.jpg', artist: { id: 'a8', name: 'Lewis Capaldi' } },
    duration: 182,
    audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/4a/4f/8e/4a4f8e4a-4e4e-4e4e-9e4e-4e4e4e4e4e4/mzaf_13399982399900999963.plus.aac.p.m4a',
    coverImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/4a/4f/8e/4a4f8e4a-4e4e-4e4e-9e4e-4e4e4e4e4e4/190295632171_cover.jpg/300x300bb.jpg',
    dateAdded: 'Recently added'
  },
  {
    id: 'default-9',
    title: 'Believer',
    artist: { id: 'a9', name: 'Imagine Dragons' },
    album: { id: 'al9', title: 'Evolve', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/7e/5a/14/7e5a14e5-5e5e-5e5e-9e5e-5e5e5e5e5e5/190295632171_cover.jpg/300x300bb.jpg', artist: { id: 'a9', name: 'Imagine Dragons' } },
    duration: 204,
    audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/7e/5a/14/7e5a14e5-5e5e-5e5e-9e5e-5e5e5e5e5e5/mzaf_13399982399900999963.plus.aac.p.m4a',
    coverImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/7e/5a/14/7e5a14e5-5e5e-5e5e-9e5e-5e5e5e5e5e5/190295632171_cover.jpg/300x300bb.jpg',
    dateAdded: 'Recently added'
  },
  {
    id: 'default-10',
    title: 'Circles',
    artist: { id: 'a10', name: 'Post Malone' },
    album: { id: 'al10', title: "Hollywood's Bleeding", image: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/f8/7e/5e/f87e5e4e-5e5e-5e5e-9e5e-5e5e5e5e5e5/190295632171_cover.jpg/300x300bb.jpg', artist: { id: 'a10', name: 'Post Malone' } },
    duration: 215,
    audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/f8/7e/5e/f87e5e4e-5e5e-5e5e-9e5e-5e5e5e5e5e5/mzaf_13399982399900999963.plus.aac.p.m4a',
    coverImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/f8/7e/5e/f87e5e4e-5e5e-5e5e-9e5e-5e5e5e5e5e5/190295632171_cover.jpg/300x300bb.jpg',
    dateAdded: 'Recently added'
  },
  {
    id: 'default-11',
    title: 'Watermelon Sugar',
    artist: { id: 'a11', name: 'Harry Styles' },
    album: { id: 'al11', title: 'Fine Line', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/1a/2b/3c/1a2b3c4d-5e5e-5e5e-9e5e-5e5e5e5e5e5/190295632171_cover.jpg/300x300bb.jpg', artist: { id: 'a11', name: 'Harry Styles' } },
    duration: 174,
    audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/1a/2b/3c/1a2b3c4d-5e5e-5e5e-9e5e-5e5e5e5e5e5/mzaf_13399982399900999963.plus.aac.p.m4a',
    coverImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/1a/2b/3c/1a2b3c4d-5e5e-5e5e-9e5e-5e5e5e5e5e5/190295632171_cover.jpg/300x300bb.jpg',
    dateAdded: 'Recently added'
  },
  {
    id: 'default-12',
    title: "Don't Start Now",
    artist: { id: 'a12', name: 'Dua Lipa' },
    album: { id: 'al12', title: 'Future Nostalgia', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/5f/a3/f3/5fa3f34e-4d93-2d70-98a6-32c54a94248e/190295816407_cover.jpg/300x300bb.jpg', artist: { id: 'a12', name: 'Dua Lipa' } },
    duration: 183,
    audioUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/5f/a3/f3/5fa3f34e-4d93-2d70-98a6-32c54a94248e/mzaf_13357660994900094931.plus.aac.p.m4a',
    coverImage: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/5f/a3/f3/5fa3f34e-4d93-2d70-98a6-32c54a94248e/190295816407_cover.jpg/300x300bb.jpg',
    dateAdded: 'Recently added'
  },
];
