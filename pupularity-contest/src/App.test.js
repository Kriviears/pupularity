import { render, screen } from '@testing-library/react';
import App from './App';
import SwipePage from './pages/SwipePage';

test('renders learn react link', () => {
  render(<SwipePage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

export default App;