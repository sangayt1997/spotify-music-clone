import React from 'react';
import { render, screen } from '@testing-library/react';
import MyPlaylist from './my-playlist';

// Dummy copied test from app.test.tsx
test('renders learn react link', () => {
    render(<MyPlaylist/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
