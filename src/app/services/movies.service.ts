import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

import { IAppState } from '../models/app';
import { FETCH_MOVIES } from '../actions/movies';

@Injectable()
export class MoviesService {

  constructor(private ngRedux: NgRedux<IAppState>) {}

  fetchMovies() {
    this.ngRedux.dispatch({
      type: FETCH_MOVIES,
      payload: {
        movies: [
          {
            id: 0,
            key: 'a-movie',
            name: 'A Movie',
            description: 'Lorem ipsum dolar sit amet',
            genres: [],
            rate: '9.4',
            length: '1hr 30mins',
            img: '//placehold.it/400x300'
          }
        ]
      }
    });
  }

}
