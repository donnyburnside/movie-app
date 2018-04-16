import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { createLogger } from 'redux-logger';

import { rootReducer } from '../reducers';
import { IAppState } from '../models/app.model';

const initialState: IAppState = {
  title: '',
  description: '',
  version: '',
  movies: [],
  genres: [],
  selectedMovie: null
};

@NgModule({
  imports: [
    NgReduxModule
  ]
})
export class AppStateModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, initialState, [ createLogger() ]);
  }
}
