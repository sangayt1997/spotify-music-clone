import React from 'react';
import { render, screen } from '@testing-library/react';
import AlbumsTable from './albums-table';
import { Song, Artist, Album } from '../../types/music';

const mockArtist: Artist = {
    id: '1',
    name: 'Test Artist',
    image: 'https://example.com/artist.jpg'
};

const mockAlbum: Album = {
    id: '1',
    title: 'Test Album',
    image: 'https://example.com/album.jpg',
    artist: mockArtist
};

const mockSong: Song = {
    id: '1',
    title: 'Test Song',
    artist: mockArtist,
    album: mockAlbum,
    duration: 180,
    audioUrl: 'https://example.com/audio.mp3',
    coverImage: 'https://example.com/cover.jpg'
};

describe('AlbumsTable', () => {
    test('renders loading state', () => {
        render(<AlbumsTable songs={[]} loading={true} />);
        expect(screen.queryByText('Test Song')).toBeNull();
    });

    test('renders songs correctly', () => {
        render(<AlbumsTable songs={[mockSong]} loading={false} />);
        expect(screen.getByText('Test Song')).toBeInTheDocument();
        expect(screen.getByText('Test Artist')).toBeInTheDocument();
    });
});
