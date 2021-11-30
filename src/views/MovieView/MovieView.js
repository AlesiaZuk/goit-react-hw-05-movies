import { useLocation } from 'react-router-dom';
import { useState } from 'react';

import * as MoviesApi from '../../services/movies-api';
import Section from '../../components/Section/Section';
import Title from '../../components/Title/Title';
import Form from '../../components/Form/Form';
import MovieList from '../../components/MovieList/MovieList';

function MovieView() {
  const location = useLocation();
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
    <Section>
      <Title title={'Search movies'} />
      <Form
        searchQuery={searchQuery}
        handelChange={handelChange}
        handleSubmit={handleSubmit}
      />
      {movie && (
        <MovieList movies={movie.results} location={location}></MovieList>
      )}
    </Section>
  );
}

export default MovieView;
