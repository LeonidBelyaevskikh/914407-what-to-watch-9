import FilmCard from '../film-card/film-card';

import { Film } from '../../types/films';

import { useState } from 'react';

type FilmsListProps = {
  films: Film[],
}

function FilmsList ({films}: FilmsListProps): JSX.Element {
  const [activeFilmCard, setActiveFilmCard] = useState<number | undefined>(undefined);
  return (
    <div className="catalog__films-list">
      {films.map((film) => <FilmCard film={film} key={film.id} setActive={setActiveFilmCard} activeFilmCard={activeFilmCard}/>)}
    </div>
  );
}

export default FilmsList;
