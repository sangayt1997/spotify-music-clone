import React from 'react';
import { render, screen } from '@testing-library/react';
import AlbumHeader from './album-header';

// Dummy copied test from app.test.tsx
test('renders learn react link', () => {
    render(<AlbumHeader albumCategories="" albumDescription="" albumTitle="" />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
