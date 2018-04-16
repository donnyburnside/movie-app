import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

import { IAppState } from '../models/app';
import { FETCH_GENRES } from '../actions/genres';

@Injectable()
export class GenresService {

  constructor(private ngRedux: NgRedux<IAppState>) {}

  fetchGenres() {
    this.ngRedux.dispatch({
      type: FETCH_GENRES,
      payload: {
        genres: [
          'action', 'drama'
        ]
      }
    });
  }

}