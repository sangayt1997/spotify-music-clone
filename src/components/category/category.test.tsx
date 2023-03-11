import React from 'react';
import { render, screen } from '@testing-library/react';
import Category from './category';

// Dummy copied test from app.test.tsx
test('renders learn react link', () => {
    render(<Category children categoryTitle=""/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
