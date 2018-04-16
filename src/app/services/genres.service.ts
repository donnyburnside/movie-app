import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

import { IAppState } from '../models/app.model';
import { FETCH_GENRES, CLEAR_GENRES } from '../actions/genres.actions';
import { genres } from '../data/genres.mock-data';

@Injectable()
export class GenresService {

  constructor(private ngRedux: NgRedux<IAppState>) {}

  fetchGenres() {
    this.ngRedux.dispatch({
      type: FETCH_GENRES,
      payload: {
        genres: genres
      }
    });
  }

  clearGenres() {
    this.ngRedux.dispatch({
      type: CLEAR_GENRES,
      payload: {
        genres: []
      }
    });
  }

}
