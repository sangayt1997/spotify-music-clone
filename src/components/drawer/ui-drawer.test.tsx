import React from 'react';
import { render, screen } from '@testing-library/react';
import UiDrawer from './ui-drawer';

// Dummy copied test from app.test.tsx
test('renders learn react link', () => {
    render(<UiDrawer/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
