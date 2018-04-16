import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

import { IAppState } from '../models/app';
import { FETCH_APP_META_DATA } from '../actions/app';

@Injectable()
export class AppService {

  constructor(private ngRedux: NgRedux<IAppState>) {}

  fetchAppMetaData() {
    this.ngRedux.dispatch({
      type: FETCH_APP_META_DATA,
      payload: {
        title: 'MoviezzZ',
        description: 'Lorem ipsum dolar',
        version: '0.0.0'
      }
    });
  }

}
