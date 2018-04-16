import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

import { IAppState } from '../models/app.model';
import { FETCH_MOVIES } from '../actions/movies.actions';
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

}
