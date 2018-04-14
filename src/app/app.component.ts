import { Component } from '@angular/core';

declare var require: (filename: string) => any;

@Component({
  selector: '#app',
  template: require('./app.component.html')
})
export class AppComponent {
  title = 'Movie App';
  label = 'Search Movies';
  placeholder = 'Armageddon';
  buttonText = 'Search';
}
