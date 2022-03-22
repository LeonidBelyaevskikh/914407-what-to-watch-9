import {createReducer} from '@reduxjs/toolkit';

import {DEFAULT_ACTIVE_GENRE} from '../const';
import {films} from '../mocks/films';

import {setActiveGenre, getFilteredFilms} from './action';

const initialState = {
  filteredFilms: films,
  activeGenre: DEFAULT_ACTIVE_GENRE,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(getFilteredFilms, (state) => {
      state.filteredFilms = state.activeGenre === DEFAULT_ACTIVE_GENRE ? films : films.filter((el) => el.genre === state.activeGenre);
    });
});

export {reducer};
