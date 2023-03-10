import React from 'react';
import { render, screen } from '@testing-library/react';
import LikedSongs from './liked-songs';

// Dummy copied test from app.test.tsx
test('renders learn react link', () => {
    render(<LikedSongs/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
