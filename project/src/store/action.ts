import {createAction} from '@reduxjs/toolkit';

export const setActiveGenre = createAction<string>('setActiveGenre');

export const getFilteredFilms = createAction('getFilmsList');
