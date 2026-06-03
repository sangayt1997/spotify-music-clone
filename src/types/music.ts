export interface Artist {
  id: string;
  name: string;
  image?: string;
}

export interface Album {
  id: string;
  title: string;
  image: string;
  artist: Artist;
  releaseDate?: string;
}

export interface Song {
  id: string;
  title: string;
  artist: Artist;
  album: Album;
  duration: number; // in seconds
  audioUrl: string;
  coverImage: string;
  dateAdded?: string;
}

export interface Playlist {
  id: string;
  title: string;
  description?: string;
  image?: string;
  owner?: string;
  songs: Song[];
}

export type RepeatMode = 'off' | 'all' | 'one';

export interface PlayerState {
  currentSong: Song | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  isMuted: boolean;
  queue: Song[];
  queueIndex: number;
  shuffle: boolean;
  repeat: RepeatMode;
}

export interface PlayerContextType extends PlayerState {
  play: (song?: Song) => void;
  pause: () => void;
  togglePlay: () => void;
  next: () => void;
  previous: () => void;
  seek: (time: number) => void;
  setVolume: (volume: number) => void;
  toggleMute: () => void;
  toggleShuffle: () => void;
  toggleRepeat: () => void;
  playAlbum: (songs: Song[], startIndex?: number) => void;
  addToQueue: (song: Song) => void;
  removeFromQueue: (songId: string) => void;
  clearQueue: () => void;
}
