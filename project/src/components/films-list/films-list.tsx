import FilmCard from '../film-card/film-card';

import { Film } from '../../types/films';

import { useState } from 'react';

type FilmsListProps = {
  films: Film[],
}

function FilmsList ({films}: FilmsListProps): JSX.Element {

  const [activeFilmCard, setActiveFilmCard] = useState(0);
  return (
    <div className="catalog__films-list">
      {films.map((film) => <FilmCard film={film} key={film.id} setActive={setActiveFilmCard}/>)}
      {activeFilmCard}
    </div>
  );
}

export default FilmsList;
