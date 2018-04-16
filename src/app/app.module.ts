import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeModule } from './home/home.module';
import { MoviesModule } from './movies/movies.module';
import { GenresModule } from './genres/genres.module';
import { AboutModule } from './about/about.module';
import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppStateModule } from './store';

@NgModule({
  imports: [
    BrowserModule,

    AppStateModule,
    HomeModule,
    MoviesModule,
    GenresModule,
    AboutModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
