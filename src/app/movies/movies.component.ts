import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Router } from '@angular/router';

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
  description = 'Displaying all movies';
  @select() movies: Array<IMovie>;

  constructor(private ngRedux: NgRedux<IAppState>,
              private moviesService: MoviesService,
              private router: Router) {}

  ngOnInit() {
    console.log('Movies Component');
    this.moviesService.fetchMovies();
  }

  onSelect(movie: IMovie) {
    this.showDetails(movie);
  }

  showDetails(movie: IMovie) {
    this.moviesService.selectMovie(movie);
    this.router.navigate(['movies', movie.key]);
  }

  ngOnDestroy() {
    this.moviesService.clearMovies();
  }
}
