import {Review} from '../../types/reviews';
import {monthNames} from '../../const';

type ReviewsProps = {
  reviews: Review[]
}

function Reviews({reviews}: ReviewsProps): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review) => (
          <div key={review.id} className="review">
            <blockquote className="review__quote">
              <p className="review__text">{review.comment}</p>
              <footer className="review__details">
                <cite className="review__author">{review.user.name}</cite>
                <time className="review__date" dateTime="2016-12-24">
                  {`${monthNames[new Date(review.date).getMonth()]} ${new Date(review.date).getDate()}, ${new Date(review.date).getFullYear()}`}
                </time>
              </footer>
            </blockquote>

            <div className="review__rating">{review.rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Reviews;
