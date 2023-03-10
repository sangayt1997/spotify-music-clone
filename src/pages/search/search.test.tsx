import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from './search';

// Dummy copied test from app.test.tsx
test('renders learn react link', () => {
    render(<Search/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
