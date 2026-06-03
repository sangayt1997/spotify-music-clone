import React, { createContext, useContext, useState, useRef, useEffect, useCallback } from 'react';
import { Song, PlayerContextType, RepeatMode } from '../types/music';

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }
  return context;
};

interface PlayerProviderProps {
  children: React.ReactNode;
}

export const PlayerProvider: React.FC<PlayerProviderProps> = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement>(new Audio());
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolumeState] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [queue, setQueue] = useState<Song[]>([]);
  const [queueIndex, setQueueIndex] = useState(-1);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState<RepeatMode>('off');

  // Use refs for player state to avoid dependency issues in effects
  const queueRef = useRef(queue);
  const queueIndexRef = useRef(queueIndex);
  const shuffleRef = useRef(shuffle);
  const repeatRef = useRef(repeat);

  // Keep refs in sync with state
  useEffect(() => {
    queueRef.current = queue;
  }, [queue]);

  useEffect(() => {
    queueIndexRef.current = queueIndex;
  }, [queueIndex]);

  useEffect(() => {
    shuffleRef.current = shuffle;
  }, [shuffle]);

  useEffect(() => {
    repeatRef.current = repeat;
  }, [repeat]);

  // Initialize audio settings from localStorage
  useEffect(() => {
    const savedVolume = localStorage.getItem('spotify-volume');
    if (savedVolume) {
      const vol = parseFloat(savedVolume);
      setVolumeState(vol);
      audioRef.current.volume = vol;
    }
  }, []);

  // Handle next track
  const handleNextTrack = useCallback(() => {
    const currentQueue = queueRef.current;
    const currentIndex = queueIndexRef.current;
    const currentShuffle = shuffleRef.current;
    const currentRepeat = repeatRef.current;

    if (currentQueue.length === 0) return;

    let nextIndex: number;

    if (currentRepeat === 'one') {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(err => {
        console.warn('Audio play failed:', err);
      });
      return;
    }

    if (currentShuffle) {
      nextIndex = Math.floor(Math.random() * currentQueue.length);
    } else {
      nextIndex = currentIndex + 1;
      if (nextIndex >= currentQueue.length) {
        if (currentRepeat === 'all') {
          nextIndex = 0;
        } else {
          setIsPlaying(false);
          return;
        }
      }
    }

    setQueueIndex(nextIndex);
    const nextSong = currentQueue[nextIndex];
    setCurrentSong(nextSong);
    audioRef.current.src = nextSong.audioUrl;
    audioRef.current.play().catch(err => {
      console.warn('Audio play failed:', err);
    });
  }, []);

  // Audio event listeners
  useEffect(() => {
    const audio = audioRef.current;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      handleNextTrack();
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handleError = (e: Event) => {
      console.error('Audio error:', e);
      console.error('Audio error code:', (e.target as HTMLAudioElement)?.error?.code);
      console.error('Audio error message:', (e.target as HTMLAudioElement)?.error?.message);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('error', handleError);
    };
  }, [handleNextTrack]);

  // Handle volume change
  useEffect(() => {
    audioRef.current.volume = isMuted ? 0 : volume;
    localStorage.setItem('spotify-volume', volume.toString());
  }, [volume, isMuted]);

  const play = useCallback((song?: Song) => {
    const audio = audioRef.current;

    if (song) {
      if (song.audioUrl !== audio.src) {
        audio.src = song.audioUrl;
        audio.load();
      }
      setCurrentSong(song);
      setQueueIndex(currentIdx => {
        const idx = queueRef.current.findIndex(s => s.id === song.id);
        return idx >= 0 ? idx : currentIdx;
      });
    }

    audio.play().catch(err => {
      console.warn('Audio play failed:', err);
    });
  }, []);

  const pause = useCallback(() => {
    audioRef.current.pause();
  }, []);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(err => {
        console.warn('Audio play failed:', err);
      });
    }
  }, [isPlaying]);

  const handleNext = useCallback(() => {
    handleNextTrack();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Intentionally empty - handleNextTrack is stable

  const handlePrevious = useCallback(() => {
    if (queueRef.current.length === 0) return;

    // If more than 3 seconds into the song, restart it
    if (audioRef.current.currentTime > 3) {
      audioRef.current.currentTime = 0;
      return;
    }

    let prevIndex = queueIndexRef.current - 1;
    if (prevIndex < 0) {
      if (repeatRef.current === 'all') {
        prevIndex = queueRef.current.length - 1;
      } else {
        prevIndex = 0;
        audioRef.current.currentTime = 0;
        return;
      }
    }

    setQueueIndex(prevIndex);
    const prevSong = queueRef.current[prevIndex];
    setCurrentSong(prevSong);
    audioRef.current.src = prevSong.audioUrl;
    audioRef.current.play().catch(err => {
      console.warn('Audio play failed:', err);
    });
  }, []);

  const seek = useCallback((time: number) => {
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  }, []);

  const setVolume = useCallback((vol: number) => {
    const clampedVol = Math.max(0, Math.min(1, vol));
    setVolumeState(clampedVol);
    setIsMuted(false);
  }, []);

  const toggleMute = useCallback(() => {
    setIsMuted(prev => !prev);
  }, []);

  const toggleShuffle = useCallback(() => {
    setShuffle(prev => !prev);
  }, []);

  const toggleRepeat = useCallback(() => {
    setRepeat(prev => {
      if (prev === 'off') return 'all';
      if (prev === 'all') return 'one';
      return 'off';
    });
  }, []);

  const playAlbum = useCallback((songs: Song[], startIndex: number = 0) => {
    if (songs.length === 0) {
      console.log('No songs to play');
      return;
    }

    // Shuffle if shuffle mode is on
    let songsToPlay = shuffleRef.current ? [...songs].sort(() => Math.random() - 0.5) : songs;

    setQueue(songsToPlay);
    setQueueIndex(0);

    const songToPlay = songsToPlay[0];
    setCurrentSong(songToPlay);

    console.log('Playing song:', songToPlay.title, 'URL:', songToPlay.audioUrl);

    const audio = audioRef.current;
    audio.src = songToPlay.audioUrl;
    audio.load();

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        console.log('Audio started playing successfully');
      }).catch((error) => {
        console.error('Audio play failed:', error);
        // Try again after a short delay
        setTimeout(() => {
          audio.play().catch(e => console.error('Retry failed:', e));
        }, 500);
      });
    }
  }, []);

  const addToQueue = useCallback((song: Song) => {
    setQueue(prev => [...prev, song]);
  }, []);

  const removeFromQueue = useCallback((songId: string) => {
    setQueue(prev => {
      const newQueue = prev.filter(s => s.id !== songId);
      const removedIndex = prev.findIndex(s => s.id === songId);
      if (removedIndex <= queueIndexRef.current) {
        setQueueIndex(idx => Math.max(0, idx - 1));
      }
      return newQueue;
    });
  }, []);

  const clearQueue = useCallback(() => {
    setQueue([]);
    setQueueIndex(-1);
  }, []);

  const value: PlayerContextType = {
    currentSong,
    isPlaying,
    currentTime,
    duration,
    volume,
    isMuted,
    queue,
    queueIndex,
    shuffle,
    repeat,
    play,
    pause,
    togglePlay,
    next: handleNext,
    previous: handlePrevious,
    seek,
    setVolume,
    toggleMute,
    toggleShuffle,
    toggleRepeat,
    playAlbum,
    addToQueue,
    removeFromQueue,
    clearQueue
  };

  return (
    <PlayerContext.Provider value={value}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContext;
