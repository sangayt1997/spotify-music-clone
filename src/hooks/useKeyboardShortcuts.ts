import { useEffect } from 'react';
import { usePlayer } from '../context/PlayerContext';

export const useKeyboardShortcuts = () => {
  const {
    togglePlay,
    next,
    previous,
    seek,
    currentTime,
    duration,
    toggleShuffle,
    toggleMute,
    currentSong
  } = usePlayer();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ignore if user is typing in an input field
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      switch (event.code) {
        case 'Space':
          event.preventDefault();
          if (currentSong) {
            togglePlay();
          }
          break;
        case 'ArrowLeft':
          event.preventDefault();
          if (currentSong) {
            seek(Math.max(0, currentTime - 10));
          }
          break;
        case 'ArrowRight':
          event.preventDefault();
          if (currentSong) {
            seek(Math.min(duration, currentTime + 10));
          }
          break;
        case 'ArrowUp':
          event.preventDefault();
          // This will be handled by volume controls if needed
          break;
        case 'ArrowDown':
          event.preventDefault();
          // This will be handled by volume controls if needed
          break;
        case 'KeyM':
          if (event.metaKey || event.ctrlKey) {
            // Don't interfere with Cmd/Ctrl+M (refresh)
            return;
          }
          event.preventDefault();
          toggleMute();
          break;
        case 'KeyS':
          if (event.metaKey || event.ctrlKey) {
            // Don't interfere with Cmd/Ctrl+S (save)
            return;
          }
          event.preventDefault();
          toggleShuffle();
          break;
        case 'KeyN':
          if (event.metaKey || event.ctrlKey) {
            return;
          }
          event.preventDefault();
          next();
          break;
        case 'KeyP':
          if (event.metaKey || event.ctrlKey) {
            return;
          }
          event.preventDefault();
          previous();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [togglePlay, next, previous, seek, currentTime, duration, toggleShuffle, toggleMute, currentSong]);
};

export default useKeyboardShortcuts;
