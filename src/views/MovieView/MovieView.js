import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import { useState } from 'react';

import * as MoviesApi from '../../services/movies-api';
import no_poster from '../../image/no_poster.jpg';

import s from './MovieView.module.css';

function MovieView() {
  const location = useLocation();
  const { url } = useRouteMatch();
  const [movie, setMovie] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    MoviesApi.fetchMoviesSearch(searchQuery).then(setMovie);

    setSearchQuery('');
  }

  function handelChange(e) {
    setSearchQuery(e.target.value.toLowerCase());
  }

  return (
    <section className={s.section}>
      <h1 className={s.title}>Search movies</h1>
      <form onSubmit={handleSubmit} className={s.form}>
        <label>
          <input
            type="text"
            value={searchQuery}
            onChange={handelChange}
            className={s.search_form}
            placeholder="Search movies..."
            required
          />
        </label>
        <button type="submit" className={s.search_button}>
          Search
        </button>
      </form>

      {movie.results && (
        <ul className={s.list}>
          {movie.results.map(item => (
            <li className={s.item} key={item.id}>
              <Link
                to={{
                  pathname: `${url}/${item.id}}`,
                  state: {
                    from: location,
                  },
                }}
              >
                <div className={s.movie_thumb}>
                  <div className={s.movie_imgbox}>
                    {item.poster_path === null ? (
                      <img
                        className={s.movie_img}
                        src={no_poster}
                        alt={item.title}
                      />
                    ) : (
                      <img
                        className={s.movie_img}
                        src={`https://www.themoviedb.org/t/p/w300/${item.poster_path}`}
                        alt={item.title}
                      />
                    )}
                  </div>
                  <div className={s.movie_titleThumb}>
                    <h3 className={s.movie_title}>{item.title}</h3>
                    <div className={s.movie_box}>
                      <p className={s.movie_date}>
                        {item.release_date.slice(0, 4)}
                      </p>
                      <div className={s.movie_average}>{item.vote_average}</div>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default MovieView;
