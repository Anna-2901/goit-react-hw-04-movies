import React, { Component } from 'react';
import x from '../../services/moviesApi';
import s from './Cast.module.css';
const { fetchCast } = x;

class Cast extends Component {
  state = {
    actors: [],
    imgBaseUrl: 'https://image.tmdb.org/t/p/w500',
  };

  async componentDidMount() {
    const { movieId } = this.props;
    fetchCast(movieId).then(result => {
      this.setState({ actors: result.cast });
    });
  }
  render() {
    const { actors, imgBaseUrl } = this.state;
    return (
      <>
        <h1 className={s.title}>Cast</h1>
        <ul className={s.castGallery}>
          {actors.map(({ id, profile_path, name }) => {
            return profile_path !== null ? (
              <li className={s.castItem} key={id}>
                <img
                  loading="lazy"
                  src={`${imgBaseUrl}${profile_path}`}
                  alt={name}
                  width="80"
                ></img>
                <p className={s.text}>{name}</p>
              </li>
            ) : (
              <li key={id}>
                <p>{name}</p>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Cast;
