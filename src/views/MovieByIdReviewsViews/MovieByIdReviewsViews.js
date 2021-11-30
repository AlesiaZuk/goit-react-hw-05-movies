import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as MoviesApi from '../../services/movies-api';
import s from './MovieByIdReviewsViews.module.css';

function MovieByIdReviewsViews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    MoviesApi.fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <>
      {reviews.results && (
        <ul>
          {reviews.results.map(review => (
            <li key={review.id} className={s.item}>
              <h4>{review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default MovieByIdReviewsViews;
