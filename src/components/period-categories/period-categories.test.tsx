import React from 'react';
import { render, screen } from '@testing-library/react';
import PeriodCategories from './period-categories';

// Dummy copied test from app.test.tsx
test('renders learn react link', () => {
    render(<PeriodCategories children/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
