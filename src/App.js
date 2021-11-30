import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import Loader from './components/Loader/Loader';

import './App.css';

const HomeView = lazy(() =>
  import('./views/HomeViews/HomeView' /* webpackChunkName: "home-view" */),
);

const MovieView = lazy(() =>
  import('./views/MovieView/MovieView' /* webpackChunkName: "movie-view" */),
);

const MovieByIdViews = lazy(() =>
  import(
    './views/MovieByIdViews/MovieByIdViews' /* webpackChunkName: "movie-by-id-view" */
  ),
);

const NotFoundView = lazy(() =>
  import(
    './views/NotFoundView/NotFoundView' /* webpackChunkName: "not-found-view" */
  ),
);

function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>

          <Route path="/movies" exact>
            <MovieView />
          </Route>

          <Route path="/movies/:movieId">
            <MovieByIdViews />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
