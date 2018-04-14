import { Component, OnInit } from '@angular/core';

declare var require: (filename: string) => any;

@Component({
  template: require('./genres.component.html')
})
export class GenresComponent implements OnInit {
  title = 'Genres';
  description = 'Lorem ipsum dolar sit amet';

  ngOnInit() {
    console.log('Genres Component');
  }
}
