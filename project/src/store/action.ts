import {createAction} from '@reduxjs/toolkit';

export const setActiveGenre = createAction<string>('setActiveGenre');

export const getFilteredFilms = createAction('getFilmsList');

export const increaseFilmsCount = createAction('increaseFilmsCount');

export const resetFilmsCount = createAction('resetFilmsCount');
