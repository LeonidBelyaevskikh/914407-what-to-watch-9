import { Film } from '../../types/films';
import { Link } from 'react-router-dom';

type SmallFilmCardProps = {
  films: Film[],
};

function SmallFilmCard({films}: SmallFilmCardProps): JSX.Element {
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <div className="catalog__films-list">
        {films.map((film) => (
          <article key={film.id} className="small-film-card catalog__films-card">
            <div className="small-film-card__image">
              <img src={film.posterImage} alt={film.name} width="280" height="175" />
            </div>
            <h3 className="small-film-card__title">
              <Link className="small-film-card__link" to={`/films/${film.id}`}>{film.name}</Link>
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SmallFilmCard;
