import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';

import { IAppState } from './models/app';
import { AppService } from './services/app.service';

declare var require: (filename: string) => any;

@Component({
  selector: '#app',
  template: require('./app.component.html'),
  providers: [ AppService ]
})
export class AppComponent implements OnInit {
  @select() title: string;
  @select() description: string;
  @select() version: string;

  constructor(private ngRedux: NgRedux<IAppState>,
              private appService: AppService) {}

  ngOnInit() {
    this.appService.fetchAppMetaData();
  }
}
