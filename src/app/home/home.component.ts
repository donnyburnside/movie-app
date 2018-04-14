import { Component, OnInit } from '@angular/core';

declare var require: (filename: string) => any;

@Component({
  template: require('./home.component.html')
})
export class HomeComponent implements OnInit {
  title = 'Homepage';
  description = 'Lorem ipsum dolar sit amet';

  ngOnInit() {
    console.log('Home Component');
  }
}
