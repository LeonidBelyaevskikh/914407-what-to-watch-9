import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import { films } from './mocks/films';
import { reviews } from './mocks/reviews';


const appProps = {
  promoFilm: {
    name: 'The Grand Budapest Hotel',
    genre: 'Drama',
    releaseDate: 2014,
  },
};

ReactDOM.render(
  <React.StrictMode>
    <App
      promoFilm={ appProps.promoFilm }
      films={ films }
      reviews={ reviews }
    />
  </React.StrictMode>,
  document.getElementById('root'));
