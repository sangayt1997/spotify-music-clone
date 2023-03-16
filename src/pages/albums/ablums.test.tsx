import React from 'react';
import { render, screen } from '@testing-library/react';
import Albums from './albums';

// Dummy copied test from app.test.tsx
test('renders learn react link', () => {
    render(<Albums/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
