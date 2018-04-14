import { Component } from '@angular/core';

@Component({
  selector: '#app',
  template: `<h1>Hello {{ word }}</h1>`,
})
export class AppComponent  { word = 'World'; }
