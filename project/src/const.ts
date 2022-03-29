export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum TabNames {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

export enum APIRoute {
  films = '/films',
  promoFilm = '/promo',
  comments = '/comments',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const DEFAULT_ACTIVE_GENRE = 'All genres';

export const FILMS_COUNT = 8;

export const emptyPromoFilm = {
  backgroundColor: '',
  backgroundImage: '',
  description: '',
  director: '',
  genre: '',
  id: 0,
  isFavorite: false,
  name: '',
  posterImage: '',
  previewImage: '',
  previewVideoLink: '',
  rating: 0,
  released: 0,
  runTime: 0,
  scoresCount: 0,
  starring: [''],
  videoLink: '',
};

export const BACKEND_URL = 'https://9.react.pages.academy/wtw';
export const REQUEST_TIMEOUT = 5000;

export const TIMEOUT_SHOW_ERROR = 2000;
