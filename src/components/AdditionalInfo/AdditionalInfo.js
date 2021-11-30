import { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';

import Loader from '../Loader/Loader';

const MovieByIdCastViews = lazy(() =>
  import(
    '../../views/MovieByIdCastViews/MovieByIdCastViews' /* webpackChunkName: "movie-cast-view" */
  ),
);

const MovieByIdReviewsViews = lazy(() =>
  import(
    '../../views/MovieByIdReviewsViews/MovieByIdReviewsViews' /* webpackChunkName: "movie-reviews-view" */
  ),
);

function AdditionalInfo({ location }) {
  return (
    <Suspense fallback={<Loader />}>
      <Route path={'/movies/:movieId/cast'}>
        <MovieByIdCastViews location={location} />
      </Route>
      <Route path={'/movies/:movieId/reviews'}>
        <MovieByIdReviewsViews location={location} />
      </Route>
    </Suspense>
  );
}

export default AdditionalInfo;
