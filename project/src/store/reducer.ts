import {createReducer} from '@reduxjs/toolkit';

import {DEFAULT_ACTIVE_GENRE, FILMS_COUNT, emptyPromoFilm} from '../const';

import { initialStateType } from '../types/state';

import {setActiveGenre, getFilteredFilms, increaseFilmsCount, resetFilmsCount, loadFilms, loadPromoFilm} from './action';

const initialState: initialStateType = {
  activeGenre: DEFAULT_ACTIVE_GENRE,
  films: [],
  filteredFilms: [],
  filmsCount: FILMS_COUNT,
  error: '',
  isDataLoaded: false,
  promoFilm: emptyPromoFilm,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(getFilteredFilms, (state) => {
      state.filteredFilms = state.activeGenre === DEFAULT_ACTIVE_GENRE ? state.films : state.films.filter((el) => el.genre === state.activeGenre);
    })
    .addCase(increaseFilmsCount, (state) => {
      state.filmsCount += FILMS_COUNT;
    })
    .addCase(resetFilmsCount, (state) => {
      state.filmsCount = FILMS_COUNT;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.filteredFilms = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    });
});

export {reducer};
