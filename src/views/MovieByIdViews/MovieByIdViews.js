import { useState, useEffect } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';

import * as MoviesApi from '../../services/movies-api';
import SectionMovie from '../../components/SectionMovie/SectionMovie';
import Button from '../../components/Button/Button';
import MovieInfo from '../../components/MovieInfo/MovieInfo';
import AdditionalInfoMovie from '../../components/AdditionalInfoMovie/AdditionalInfoMovie';
import AdditionalInfo from '../../components/AdditionalInfo/AdditionalInfo';

function MovieByIdViews() {
  const history = useHistory();
  const location = useLocation();
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
      <SectionMovie>
        <Button handleGoBack={handleGoBack} />
        {movieById && (
          <MovieInfo movieById={movieById} location={location}></MovieInfo>
        )}
      </SectionMovie>

      <SectionMovie>
        <AdditionalInfoMovie movieId={movieId} location={location} />
      </SectionMovie>

      <SectionMovie>
        <AdditionalInfo location={location} />
      </SectionMovie>
    </>
  );
}

export default MovieByIdViews;
