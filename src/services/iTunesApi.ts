// iTunes Search API - Free, no authentication required
// Returns 30-second preview URLs for songs

const ITUNES_API_BASE = 'https://itunes.apple.com/search';

export interface ITunesTrack {
  trackId: number;
  trackName: string;
  artistName: string;
  collectionName: string;
  artworkUrl100: string;
  artworkUrl600: string;
  previewUrl: string;
  trackTimeMillis: number;
}

export interface ITunesSearchResult {
  resultCount: number;
  results: ITunesTrack[];
}

// Fetch popular songs from iTunes
export const fetchPopularSongs = async (term: string = 'top songs', limit: number = 20): Promise<ITunesTrack[]> => {
  try {
    const response = await fetch(
      `${ITUNES_API_BASE}?term=${encodeURIComponent(term)}&media=music&entity=song&limit=${limit}`
    );
    const data: ITunesSearchResult = await response.json();
    return data.results.filter(track => track.previewUrl);
  } catch (error) {
    console.error('Error fetching from iTunes API:', error);
    return [];
  }
};

// Fetch songs by genre/category
export const fetchSongsByGenre = async (genre: string, limit: number = 20): Promise<ITunesTrack[]> => {
  try {
    const response = await fetch(
      `${ITUNES_API_BASE}?term=${encodeURIComponent(genre)}&media=music&entity=song&limit=${limit}`
    );
    const data: ITunesSearchResult = await response.json();
    return data.results.filter(track => track.previewUrl);
  } catch (error) {
    console.error('Error fetching songs by genre:', error);
    return [];
  }
};

// Fetch specific artist songs
export const fetchArtistSongs = async (artistName: string, limit: number = 15): Promise<ITunesTrack[]> => {
  try {
    const response = await fetch(
      `${ITUNES_API_BASE}?term=${encodeURIComponent(artistName)}&media=music&entity=musicTrack&limit=${limit}`
    );
    const data: ITunesSearchResult = await response.json();
    return data.results.filter(track => track.previewUrl);
  } catch (error) {
    console.error('Error fetching artist songs:', error);
    return [];
  }
};

// Fetch album songs
export const fetchAlbumSongs = async (albumName: string, limit: number = 20): Promise<ITunesTrack[]> => {
  try {
    const response = await fetch(
      `${ITUNES_API_BASE}?term=${encodeURIComponent(albumName)}&media=music&entity=album&limit=${limit}`
    );
    const data: ITunesSearchResult = await response.json();
    return data.results.filter(track => track.previewUrl);
  } catch (error) {
    console.error('Error fetching album songs:', error);
    return [];
  }
};

// Convert iTunes track to our Song type
export const convertITunesTrackToSong = (track: ITunesTrack, index: number) => ({
  id: `itunes-${track.trackId}`,
  title: track.trackName,
  artist: {
    id: `artist-${track.artistName}`,
    name: track.artistName,
  },
  album: {
    id: `album-${track.collectionName}`,
    title: track.collectionName,
    image: track.artworkUrl600 || track.artworkUrl100,
    artist: {
      id: `artist-${track.artistName}`,
      name: track.artistName,
    },
  },
  duration: Math.floor(track.trackTimeMillis / 1000),
  audioUrl: track.previewUrl,
  coverImage: track.artworkUrl600 || track.artworkUrl100,
  dateAdded: 'Recently added',
});
