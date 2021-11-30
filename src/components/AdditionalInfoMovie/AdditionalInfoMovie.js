import { NavLink } from 'react-router-dom';

import s from './AdditionalInfoMovie.module.css';

function AdditionalInfoMovie({ movieId, location }) {
  return (
    <>
      <h3 className={s.title_additional}>Additional information</h3>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink
            to={{
              pathname: `/movies/${movieId}/cast`,
              state: {
                from: location?.state?.from ?? '/',
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
                from: location?.state?.from ?? '/',
              },
            }}
            className={s.link}
            activeClassName={s.link_active}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </>
  );
}
export default AdditionalInfoMovie;
