import { Component, OnInit } from '@angular/core';

declare var require: (filename: string) => any;

@Component({
  template: require('./about.component.html')
})
export class AboutComponent implements OnInit {
  title = 'About';
  description = 'Lorem ipsum dolar sit amet';

  ngOnInit() {
    console.log('About Component');
  }
}
