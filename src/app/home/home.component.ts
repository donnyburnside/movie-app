import { Component, OnInit } from '@angular/core';

declare var require: (filename: string) => any;

@Component({
  template: require('./home.component.html')
})
export class HomeComponent implements OnInit {
  title = 'Awesome Movie Collection';
  description = 'Browse the latest and greatest movies in our digital collection';
  image = 'home-graphic.png';

  ngOnInit() {
    console.log('Home Component');
  }
}
