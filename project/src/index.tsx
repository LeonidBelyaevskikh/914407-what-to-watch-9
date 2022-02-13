import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const appProps = {
  promoFilm: {
    name: 'The Grand Budapest Hotel',
    genre: 'Drama',
    releaseDate: 2014,
  },
  films: [
    'Fantastic Beasts: The Crimes of Grindelwald',
    'Bohemian Rhapsody',
    'Macbeth',
    'Aviator',
    'We need to talk about Kevin',
    'What We Do in the Shadows',
    'Revenant',
    'Johnny English',
    'Shutter Island',
    'Pulp Fiction',
    'No Country for Old Men',
    'Snatch',
    'Moonrise Kingdom',
    'Seven Years in Tibet',
    'Midnight Special',
    'War of the Worlds',
    'Dardjeeling Limited',
    'Orlando',
    'Mindhunter',
    'Midnight Special',
  ],
};

ReactDOM.render(
  <React.StrictMode>
    <App promoFilm={appProps.promoFilm} films={appProps.films}/>
  </React.StrictMode>,
  document.getElementById('root'));
