import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import s from './AppBar.module.css';

const AppBar = () => {
  return (
    <header className={s.header}>
      <nav>
        <NavLink to={routes.home} className={s.link}>
          HOME
        </NavLink>
        <NavLink to={routes.movies} className={s.linkMovie}>
          MOVIES
        </NavLink>
      </nav>
    </header>
  );
};
export default AppBar;
