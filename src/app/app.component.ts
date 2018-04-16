import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';

import { IAppState } from './models/app';
import { FETCH_APP_META_DATA } from './actions/app';

declare var require: (filename: string) => any;

@Component({
  selector: '#app',
  template: require('./app.component.html')
})
export class AppComponent implements OnInit {
  @select() title: string;
  @select() description: string;
  @select() version: string;

  constructor(private ngRedux: NgRedux<IAppState>) {}

  ngOnInit() {
    this.fetchAppMetaData();
  }

  fetchAppMetaData() {
    this.ngRedux.dispatch({type: FETCH_APP_META_DATA});
  }
}
