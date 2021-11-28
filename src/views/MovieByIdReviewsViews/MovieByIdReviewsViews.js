import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as MoviesApi from '../../services/movies-api';
import s from './MovieByIdReviewsViews.module.css';

function MovieByIdReviewsViews({ location }) {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  console.log(reviews);
  console.log(movieId);

  useEffect(() => {
    MoviesApi.fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <>
      {reviews.results === null ? (
        <ul>
          {reviews.results.map(review => (
            <li key={review.id} className={s.item}>
              <p>alesia</p>
              <h4>{review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={s.text}>We don`t have any reviews for this movies.</p>
      )}
    </>
  );
}

export default MovieByIdReviewsViews;
