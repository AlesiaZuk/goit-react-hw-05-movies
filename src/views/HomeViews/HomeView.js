import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import * as MoviesApi from '../../services/movies-api';
import Section from '../../components/Section/Section';
import Title from '../../components/Title/Title';
import MovieList from '../../components/MovieList/MovieList';

export default function HomeView() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    MoviesApi.fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <Section>
      <Title title={'20 most popular films today:'}></Title>
      {movies && (
        <MovieList movies={movies.results} location={location}></MovieList>
      )}
    </Section>
  );
}
