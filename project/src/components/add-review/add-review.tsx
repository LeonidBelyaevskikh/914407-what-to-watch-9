import Logo from '../logo/logo';
import ReviewForm from '../review-form/review-form';

import {useParams, Link} from 'react-router-dom';
import {Film} from '../../types/films';

type AddReviewProps = {
  films: Film[];
}

function AddReview({films}: AddReviewProps): JSX.Element {
  const params = useParams();
  const currentFilm = films.find((el) => el.id === Number(params.id));

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={currentFilm?.backgroundImage} alt={currentFilm?.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo/>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${currentFilm?.id}`} className="breadcrumbs__link">{currentFilm?.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={`/films/${currentFilm?.id}/review`}>Add review</Link>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={currentFilm?.backgroundImage} alt={currentFilm?.name} width="218" height="327" />
        </div>
      </div>
      <ReviewForm />
    </section>
  );
}
export default AddReview;
