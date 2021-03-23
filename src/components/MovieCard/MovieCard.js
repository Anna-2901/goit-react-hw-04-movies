import React from 'react';
import PropTypes from 'prop-types';
import s from './MovieCard.module.css';

const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

const MovieCard = ({ movieDetails, genres }) => {
  const { poster_path, original_title, vote_average, overview } = movieDetails;
  return (
    <>
      <div className={s.detailBox}>
        <div>
          <img
            className={s.poster}
            loading="lazy"
            src={`${imgBaseUrl}${poster_path}`}
            alt={original_title}
            width="280"
          />
        </div>
        <div className={s.detailBoxContent}>
          <h2>{original_title}</h2>
          <ul className={s.detailList}>
            <li>
              <p className={s.infoTitle}>User score: </p>
              <span>{vote_average}</span>
            </li>
            <li>
              <p className={s.infoTitle}>Overview: </p>{' '}
              <p className={s.text}>{overview}</p>
            </li>
            <li>
              <p className={s.infoTitle}>Genres:</p>{' '}
              <p>
                {genres.map(genre => (
                  <p key={genre.id}>{genre.name}</p>
                ))}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

MovieCard.defaultProps = {
  poster_path: undefined,
  original_title: 'No name',
  vote_average: 'No vote',
  overview: 'No overview',
  genres: 'No genres',
};

MovieCard.propTypes = {
  movieDetails: PropTypes.shape({
    poster_path: PropTypes.string,
    original_title: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
  }),
  genres: PropTypes.array,
};

export default MovieCard;
