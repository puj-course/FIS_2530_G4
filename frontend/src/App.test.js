import { render, screen } from '@testing-library/react';
import App from './App';

test('Frontend funcionando correctamente', () => {
  render(<App />);
  try {
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  } catch (error) {
    throw new Error('❌ No se encontró el enlace "learn react" en el DOM');
  }
});

