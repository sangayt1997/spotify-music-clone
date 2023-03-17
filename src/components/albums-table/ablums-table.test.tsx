import React from 'react';
import { render, screen } from '@testing-library/react';
import AlbumsTable from './albums-table';

// Dummy copied test from app.test.tsx
test('renders learn react link', () => {
    render(<AlbumsTable/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
