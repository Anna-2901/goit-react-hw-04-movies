import React, { lazy, Suspense, Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import MovieCard from '../../components/MovieCard/MovieCard';
import s from './MovieDetailsPage.module.css';
import routes from '../../routes';
import x from '../../services/moviesApi';
const { fetchMovie } = x;

const Cast = lazy(() =>
  import('../../components/Cast/Cast' /* webpackChunkName: "Cast" */),
);

const Reviews = lazy(() =>
  import('../../components/Reviews/Reviews' /* webpackChunkName: "Reviews" */),
);

class MovieDetailsPage extends Component {
  state = {
    movieDetail: {},
    movieGenres: [],
  };

  async componentDidMount() {
    const { movieID } = this.props.match.params;

    fetchMovie(movieID)
      .then(result => {
        this.setState({ movieDetail: result, movieGenres: result.genres });
      })
      .catch(error => console.error(error));
  }

  handleGoBack = () => {
    const { history, location } = this.props;
    history.push(location?.state?.from || routes.home);
  };

  render() {
    const { movieDetail, movieGenres } = this.state;
    const { id } = movieDetail;
    return (
      <div className={s.container}>
        <button className={s.backBtn} type="button" onClick={this.handleGoBack}>
          Back
        </button>
        <div className={s.movieInfo}>
          <div>
            <MovieCard movieDetails={movieDetail} genres={movieGenres} />
          </div>
          <div>
            <ul className={s.box}>
              <li>
                <NavLink
                  className={s.link}
                  to={{
                    pathname: `${this.props.match.url}/cast`,
                    state: {
                      from: this.props.location?.state?.from,
                    },
                  }}
                >
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={s.link}
                  to={{
                    pathname: `${this.props.match.url}/reviews`,
                    state: {
                      from: this.props.location?.state?.from,
                    },
                  }}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>

            <Suspense>
              <Route path={`${this.props.match.url}/cast`}>
                <Cast movieId={id} />
              </Route>
              <Route path={`${this.props.match.url}/reviews`}>
                <Reviews movieId={id} />
              </Route>
            </Suspense>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetailsPage;
