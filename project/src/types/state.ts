import {store} from '../store/index.js';

import { Film, Films } from './films';

export type initialStateType = {
    activeGenre: string;
    films: Films;
    filteredFilms: Films;
    filmsCount: number;
    error: string;
    isDataLoaded: boolean;
    promoFilm: Film;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
