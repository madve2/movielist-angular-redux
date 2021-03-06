import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './common';
import { AppComponent } from './app.component';
import { EffectsModule } from "@ngrx/effects";
import { MovieEffects } from "./common/movies/movies.effects";
import { MoviesService } from "./common/movies/movies.service";
import { MovieListComponent } from './movie-list/movie-list.component';
import { environment } from '../environments/environment';
import { HttpModule } from "@angular/http";
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesMockService } from "../mocks/movies-mock.service";

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    HttpModule,
    NgbModule.forRoot(),
    EffectsModule.forRoot([MovieEffects])
  ],
  providers: [
    (!environment.apiKey && !environment.production) ? { provide: MoviesService, useClass: MoviesMockService } : MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
