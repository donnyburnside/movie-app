import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

import { IAppState } from '../models/app.model';
import { IMovie } from "../models/movie.model";
import { FETCH_MOVIES, CLEAR_MOVIES, SELECT_MOVIE, CLEAR_SELECTED_MOVIE } from '../actions/movies.actions';
import { movies } from '../data/movies.mock-data';

@Injectable()
export class MoviesService {

  constructor(private ngRedux: NgRedux<IAppState>) {}

  fetchMovies() {
    this.ngRedux.dispatch({
      type: FETCH_MOVIES,
      payload: {
        movies: movies
      }
    });
  }

  clearMovies() {
    this.ngRedux.dispatch({
      type: CLEAR_MOVIES,
      payload: {
        movies: []
      }
    });
  }

  selectMovie(movie: IMovie) {
    this.ngRedux.dispatch({
      type: SELECT_MOVIE,
      payload: {
        selectedMovie: movie
      }
    });
  }

  clearSelectedMovie() {
    this.ngRedux.dispatch({
      type: CLEAR_SELECTED_MOVIE,
      payload: {
        selectedMovie: null
      }
    });
  }

}
