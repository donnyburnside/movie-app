import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';

import { IAppState } from '../models/app.model';
import { GenresService } from '../services/genres.service';

declare var require: (filename: string) => any;

@Component({
  template: require('./genres.component.html'),
  providers: [ GenresService ]
})
export class GenresComponent implements OnInit {
  title = 'Genres';
  description = 'Displaying all genres';
  @select() genres: Array<any>;

  constructor(private ngRedux: NgRedux<IAppState>,
              private genresService: GenresService) {}

  ngOnInit() {
    console.log('Genres Component');
    this.genresService.fetchGenres();
  }

  ngOnDestroy() {
    this.genresService.clearGenres();
  }
}
