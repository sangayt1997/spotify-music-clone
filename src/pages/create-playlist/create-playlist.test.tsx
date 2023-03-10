import React from 'react';
import { render, screen } from '@testing-library/react';
import CreatePlaylist from './create-playlist';

// Dummy copied test from app.test.tsx
test('renders learn react link', () => {
    render(<CreatePlaylist/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
