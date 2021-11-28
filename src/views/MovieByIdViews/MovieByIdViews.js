import { useState, useEffect } from 'react';
import {
  useParams,
  NavLink,
  Route,
  useLocation,
  useHistory,
} from 'react-router-dom';

import * as MoviesApi from '../../services/movies-api';
import no_poster from '../../image/no_poster.jpg';

import MovieByIdCastViews from '../MovieByIdCastViews/MovieByIdCastViews';
import MovieByIdReviewsViews from '../MovieByIdReviewsViews/MovieByIdReviewsViews';

import s from './MovieByIdViews.module.css';

function MovieByIdViews() {
  const history = useHistory();
  const location = useLocation();

  console.log('location', location);

  const { movieId } = useParams();

  const [movieById, setMovieById] = useState(null);

  useEffect(() => {
    MoviesApi.fetchMoviesById(movieId).then(setMovieById);
  }, [movieId]);

  function handleGoBack() {
    history.push(location?.state?.from ?? '/');
  }

  return (
    <>
      <section className={s.section}>
        <button className={s.button} onClick={handleGoBack}>
          Go back
        </button>

        {movieById && (
          <div className={s.modal_wrap}>
            <div className={s.modal_thumb}>
              {movieById.poster_path ? (
                <img
                  src={`https://www.themoviedb.org/t/p/w500/${movieById.poster_path}`}
                  alt={movieById.title}
                  className={s.modal_img}
                />
              ) : (
                <img
                  src={no_poster}
                  alt={movieById.title}
                  className={s.modal_img}
                />
              )}
            </div>
            <div className={s.modal_inner}>
              <h2 className={s.modal_title}>{movieById.title}</h2>

              <table className={s.modal_table}>
                <tbody>
                  <tr className={s.modal_item}>
                    <td className={s.modal_subtitle}>Vote / Votes</td>
                    <td className={s.modal_text}>
                      <span className={s.modal_innerRating}>
                        {movieById.vote_average}
                      </span>{' '}
                      /
                      <span className={s.modal_innerVotes}>
                        {movieById.vote_count}
                      </span>
                    </td>
                  </tr>
                  <tr className={s.modal_item}>
                    <td className={s.modal_subtitle}>Popularity</td>
                    <td className={s.modal_text}>{movieById.popularity}</td>
                  </tr>
                  <tr className={s.modal_item}>
                    <td className={s.modal_subtitle}>Original Title</td>
                    <td className={s.modal_text}>{movieById.title}</td>
                  </tr>
                  <tr className={s.modal_item}>
                    <td className={s.modal_subtitle}>Genre</td>
                    <td className={s.modal_text}>
                      {/* {movieById.genres.map(genre => genre.name).join(', ')} */}
                    </td>
                  </tr>
                </tbody>
              </table>

              <p className={s.caption}>About</p>
              <p className={s.desc}>{movieById.overview}</p>
            </div>
          </div>
        )}
      </section>
      <section className={s.section}>
        <h3 className={s.title_additional}>Additional information</h3>
        <ul className={s.list}>
          <li className={s.item}>
            <NavLink
              to={{
                pathname: `/movies/${movieId}/cast`,
                state: {
                  from: location,
                },
              }}
              className={s.link}
              activeClassName={s.link_active}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `/movies/${movieId}/reviews`,
                state: {
                  from: location,
                },
              }}
              className={s.link}
              activeClassName={s.link_active}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </section>
      <section className={s.section}>
        <Route path={'/movies/:movieId/cast'}>
          <MovieByIdCastViews location={location} />
        </Route>
        <Route path={'/movies/:movieId/reviews'}>
          <MovieByIdReviewsViews location={location} />
        </Route>
      </section>
    </>
  );
}

export default MovieByIdViews;
