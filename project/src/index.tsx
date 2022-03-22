import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';

import { films } from './mocks/films';
import { reviews } from './mocks/reviews';

import { store } from './store';

const appProps = {
  promoFilm: {
    name: 'The Grand Budapest Hotel',
    genre: 'Drama',
    releaseDate: 2014,
  },
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        promoFilm={appProps.promoFilm}
        films={films}
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
