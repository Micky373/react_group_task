import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import Navbar from '../Navbar';
import store from '../../redux/configureStore';

it('it works', () => {
  const tree = render(
    <Provider store={store}>
      <Router>
        <Navbar />
      </Router>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  render(
    <Provider store={store}>
      <Router>
        <Navbar />
      </Router>
    </Provider>,
  );
  expect(screen.getByText(/Space/)).toBeInTheDocument();
});
