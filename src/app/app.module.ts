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

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    NgbModule.forRoot(),
    EffectsModule.forRoot([MovieEffects])
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
