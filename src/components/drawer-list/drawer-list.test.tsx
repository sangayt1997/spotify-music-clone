import React from 'react';
import { render, screen } from '@testing-library/react';
import UiDrawerList from "./drawer-list";

// Dummy copied test from app.test.tsx
test('renders learn react link', () => {
    render(<UiDrawerList/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
