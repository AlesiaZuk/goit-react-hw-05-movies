import { Link } from 'react-router-dom';

import no_poster from '../../image/no_poster.jpg';

import s from './MovieList.module.css';

function MovieList({ movies = [], location }) {
  return (
    <ul className={s.list}>
      {movies.map(movie => (
        <li className={s.item} key={movie.id}>
          <Link
            to={{
              pathname: `/movies/${movie.id}`,
              state: {
                from: location,
              },
            }}
          >
            <div className={s.movie_thumb}>
              <div className={s.movie_imgbox}>
                {movie.poster_path === null ? (
                  <img
                    className={s.movie_img}
                    src={no_poster}
                    alt={movie.title}
                  />
                ) : (
                  <img
                    className={s.movie_img}
                    src={`https://www.themoviedb.org/t/p/w300/${movie.poster_path}`}
                    alt={movie.title}
                  />
                )}
              </div>
              <div className={s.movie_titleThumb}>
                <h3 className={s.movie_title}>{movie.title}</h3>
                <div className={s.movie_box}>
                  <p className={s.movie_date}>
                    {movie.release_date.slice(0, 4)}
                  </p>
                  <div className={s.movie_average}>{movie.vote_average}</div>
                </div>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
