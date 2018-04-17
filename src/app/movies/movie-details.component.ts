import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Router } from '@angular/router';

import { IAppState } from '../models/app.model';
import { IMovie } from "../models/movie.model";
import { MoviesService } from '../services/movies.service';

declare var require: (filename: string) => any;

@Component({
  template: require('./movie-details.component.html'),
  providers: [ MoviesService ]
})
export class MovieDetailsComponent implements OnInit {
  title = 'Movie Details';
  description = 'Displaying the details of a single movie';
  @select() selectedMovie: IMovie;

  constructor(private ngRedux: NgRedux<IAppState>,
              private moviesService: MoviesService,
              private router: Router) {}

  ngOnInit() {
    console.log('Movie Details Component');
  }

  onBack() {
    this.goBack();
  }

  goBack() {
    this.router.navigate(['movies']);
  }

  ngOnDestroy() {
    this.moviesService.clearSelectedMovie();
  }
}
