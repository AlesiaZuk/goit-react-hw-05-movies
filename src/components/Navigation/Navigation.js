import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

function Navigation() {
  return (
    <nav>
      <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
        Home
      </NavLink>

      <NavLink to="/" className={s.link} activeClassName={s.activeLink}>
        Movies
      </NavLink>
    </nav>
  );
}

export default Navigation;
