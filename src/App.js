import { Switch, Route } from 'react-router-dom';

import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';

import HomeView from './views/HomeViews/HomeView';
import MovieView from './views/MovieView/MovieView';
import MovieByIdViews from './views/MovieByIdViews/MovieByIdViews';
import NotFoundView from './views/NotFoundView/NotFoundView';

import './App.css';

function App() {
  return (
    <Container>
      <AppBar />
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
    </Container>
  );
}

export default App;
