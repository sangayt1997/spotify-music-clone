import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './footer';

// Dummy copied test from app.test.tsx
test('renders learn react link', () => {
    render(<Footer/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
