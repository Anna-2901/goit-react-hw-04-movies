import React from 'react';
import PropTypes from 'prop-types';
import Preview from '../Preview/Preview';
import s from './Gallery.module.css';

const Gallery = ({ movies }) => {
  return (
    <ul className={s.gallery}>
      {movies.map(movie => (
        <Preview movie={movie} key={movie.id} />
      ))}
    </ul>
  );
};

Gallery.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default Gallery;
