import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './home';

// Dummy copied test from app.test.tsx
test('renders learn react link', () => {
    render(<Home/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
