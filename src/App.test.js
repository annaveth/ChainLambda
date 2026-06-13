// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainLambda title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainLambda/i);
    expect(titleElement).toBeInTheDocument();
});
