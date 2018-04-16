import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';

import { IAppState } from '../models/app.model';
import { IMovie } from "../models/movie.model";
import { MoviesService } from '../services/movies.service';

declare var require: (filename: string) => any;

@Component({
  template: require('./movies.component.html'),
  providers: [ MoviesService ]
})
export class MoviesComponent implements OnInit {
  title = 'Movies';
  description = 'Lorem ipsum dolar sit amet';
  @select() movies: Array<any>;

  selectedMovie: IMovie;

  constructor(private ngRedux: NgRedux<IAppState>,
              private moviesService: MoviesService) {}

  ngOnInit() {
    console.log('Movies Component');
    this.moviesService.fetchMovies();
  }

  onSelect() {}
}
