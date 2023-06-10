import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Are You Ready to Become a Math God?/i);
  expect(linkElement).toBeInTheDocument();
});
