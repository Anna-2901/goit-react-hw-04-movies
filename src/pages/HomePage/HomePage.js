import React, { Component } from 'react';
import Gallery from '../../components/Gallery/Gallery';
import s from './HomePage.module.css';
import x from '../../services/moviesApi';
const { fetchTrendingMovies } = x;

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    fetchTrendingMovies()
      .then(result => {
        this.setState({ movies: result });
      })
      .catch(error => console.error(error));
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <h1 className={s.trending}>Trending today</h1>
        <Gallery movies={movies} />
      </div>
    );
  }
}

export default HomePage;
