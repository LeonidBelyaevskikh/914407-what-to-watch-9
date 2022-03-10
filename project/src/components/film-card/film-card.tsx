import { Film } from '../../types/films';
import { Link } from 'react-router-dom';
type FilmCardProps = {
  film: Film,
  activeFilmCard: number | undefined,
  setActive: React.Dispatch<React.SetStateAction<number | undefined>>
}

function FilmCard({film, setActive, activeFilmCard}: FilmCardProps): JSX.Element {
  const handleMouseEnter = () => {
    setActive(film.id);
  };
  const handleMouseLeave = () => {
    setActive(undefined);
  };
  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave }>
      <div className="small-film-card__image">
        <img src={film.previewImage} alt={film.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>{film.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
