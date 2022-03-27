import {createAction} from '@reduxjs/toolkit';
import {Film, Films} from '../types/films';

export const setActiveGenre = createAction<string>('setActiveGenre');

export const getFilteredFilms = createAction('getFilmsList');

export const increaseFilmsCount = createAction('increaseFilmsCount');

export const resetFilmsCount = createAction('resetFilmsCount');

export const loadFilms = createAction<Films>('data/loadFilms');

export const loadPromoFilm = createAction<Film>('data/loadPromoFilm');

export const setError = createAction<string>('setError');
