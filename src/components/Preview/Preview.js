import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './Preview.module.css';
const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

const Preview = ({ movie, location }) => {
  const { id, poster_path, original_title, original_name } = movie;
  return (
    <li className={s.preview}>
      <Link
        className={s.link}
        to={{
          pathname: `/movies/${id}`,
          state: {
            from: location,
          },
        }}
      >
        <img
          className={s.image}
          loading="lazy"
          src={`${imgBaseUrl}${poster_path}`}
          alt={original_title}
          data={id}
        />
        <h2 className={s.title}>
          {original_title ? original_title : original_name}
        </h2>
      </Link>
    </li>
  );
};
Preview.propTypes = {
  movie: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(Preview);
