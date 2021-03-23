import React, { Component } from 'react';
import Gallery from '../../components/Gallery/Gallery';
import s from './MoviesPage.module.css';
import x from '../../services/moviesApi';
const { fetchSearchedMovies } = x;

class MoviesPage extends Component {
  state = {
    query: '',
    searchMovies: [],
  };

  componentDidMount() {
    if (this.props.location.search) {
      fetchSearchedMovies(this.props.location.search.slice(7)).then(result =>
        this.setState({ searchMovies: result }),
      );
    }
  }

  handleChange = ev => {
    this.setState({ query: ev.currentTarget.value });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    const history = this.props.history;

    fetchSearchedMovies(this.state.query)
      .then(result => {
        if (result.length === 0) {
          alert(`Movie is not found`);
        }
        this.setState({ searchMovies: result });
      })
      .catch(error => console.log(error));

    history.push({
      pathname: history.location.pathname,
      search: `?query=${this.state.query}`,
      key: history.location.key,
    });

    this.setState({ query: '' });
  };

  render() {
    const { searchMovies } = this.state;
    return (
      <div className={s.search}>
        <form onSubmit={this.handleSubmit} className={s.form}>
          <input
            className={s.input}
            value={this.state.query}
            onChange={this.handleChange}
            type="text"
          />
          <button className={s.searchBtn} type="submit">
            <span>Search</span>
          </button>
        </form>
        <Gallery movies={searchMovies} />
      </div>
    );
  }
}
export default MoviesPage;
