import React from 'react';
import { render, screen } from '@testing-library/react';
import YourLibrary from './your-library';

// Dummy copied test from app.test.tsx
test('renders learn react link', () => {
    render(<YourLibrary/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
