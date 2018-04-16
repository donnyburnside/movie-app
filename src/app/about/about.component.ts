import { Component, OnInit } from '@angular/core';

declare var require: (filename: string) => any;

@Component({
  template: require('./about.component.html')
})
export class AboutComponent implements OnInit {
  title = 'About';
  description = 'Information about the app';
  content = `<p>This movies collection app was built by <a href="http://www.donnyburnside.com/">Donny Burnside</a> using the following technologies:</p>
             <dl>
              <dt>Framework</dt>
              <dl>Angular v5.2</dl>
              <dt>Libraries</dt>
              <dl>TypeScript, Rxjs, Redux, Bootstrap</dl>
              <dt>Other</dt>
              <dl>Webpack, Babel, SCSS, PostCSS, Autoprefixer</dl>
             </dl>
            <p>It is licensed under MIT and the source code is publicly available on <a href="https://github.com/donnyburnside/movie-app">GitHub</a>.`;

  ngOnInit() {
    console.log('About Component');
  }
}
