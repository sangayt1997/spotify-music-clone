import React from 'react';
import { render, screen } from '@testing-library/react';
import AllCategories from './all-categories';

// Dummy copied test from app.test.tsx
test('renders learn react link', () => {
    render(<AllCategories/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
