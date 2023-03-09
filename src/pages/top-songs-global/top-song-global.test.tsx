import React from 'react';
import { render, screen } from '@testing-library/react';
import TopSongGlobal from './top-song-global';

// Dummy copied test from app.test.tsx
test('renders learn react link', () => {
    render(<TopSongGlobal/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
