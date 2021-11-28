import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as MoviesApi from '../../services/movies-api';
import no_image from '../../image/no_image.png';

import s from './MovieByIdCastViews.module.css';

function MovieByIdCastViews() {
  const [actors, setActors] = useState({});
  const { movieId } = useParams();

  console.log('useParams', useParams());
  console.log('actors', actors);
  useEffect(() => {
    MoviesApi.fetchMovieCast(movieId).then(setActors);
  }, [movieId]);

  return (
    <>
      {actors.cast && (
        <ul className={s.list}>
          {actors.cast.map(actor => (
            <li className={s.item} key={actor.id}>
              {actor.profile_path === null ? (
                <img src={no_image} alt={actor.name} className={s.img} />
              ) : (
                <img
                  src={`https://www.themoviedb.org/t/p/w300/${actor.profile_path}`}
                  alt={actor.name}
                  className={s.img}
                />
              )}
              <div className={s.meta}>
                <p className={s.title}>{actor.name}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default MovieByIdCastViews;
