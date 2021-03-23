import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import AppBar from './components/AppBar/AppBar';
import routes from './routes';
import './App.css';

const HomePage = lazy(() =>
  import('./pages/HomePage/HomePage' /* webpackChunkName: "HomePage" */),
);

const MoviesPage = lazy(() =>
  import('./pages/MoviesPage/MoviesPage' /* webpackChunkName: "MoviesPage" */),
);

const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */
  ),
);

const App = () => {
  return (
    <>
      <AppBar />
      <div className="App">
        <Suspense fallback={<h1>Загрузка...</h1>}>
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <Route path={routes.movieDetails} component={MovieDetailsPage} />
            <Route path={routes.movies} component={MoviesPage} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </div>
    </>
  );
};
export default App;
