import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';
import { Provider } from 'react-redux';
import store from '../redux/store';

test('renders value', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/Value:/i);
  expect(linkElement).toBeInTheDocument();
});