import { Component, OnInit } from '@angular/core';

declare var require: (filename: string) => any;

@Component({
  template: require('./movies.component.html')
})
export class MoviesComponent implements OnInit {
  title = 'Movies';
  description = 'Lorem ipsum dolar sit amet';

  ngOnInit() {
    console.log('Movies Component');
  }
}
