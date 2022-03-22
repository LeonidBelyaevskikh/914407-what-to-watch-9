import {createReducer} from '@reduxjs/toolkit';

import {DEFAULT_ACTIVE_GENRE, FILMS_COUNT} from '../const';
import {films} from '../mocks/films';

import {setActiveGenre, getFilteredFilms, increaseFilmsCount, resetFilmsCount} from './action';

const initialState = {
  filteredFilms: films,
  activeGenre: DEFAULT_ACTIVE_GENRE,
  filmsCount: FILMS_COUNT,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(getFilteredFilms, (state) => {
      state.filteredFilms = state.activeGenre === DEFAULT_ACTIVE_GENRE ? films : films.filter((el) => el.genre === state.activeGenre);
    })
    .addCase(increaseFilmsCount, (state) => {
      state.filmsCount += FILMS_COUNT;
    })
    .addCase(resetFilmsCount, (state) => {
      state.filmsCount = FILMS_COUNT;
    });
});

export {reducer};
