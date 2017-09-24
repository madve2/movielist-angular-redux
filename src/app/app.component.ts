import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import * as fromRoot from './common/index';
import * as movies from './common/movies/movies.actions';
import { Movie } from "./models/Movie";
import { environment } from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  movies$ : Observable<any>;
  moviesCount$ : Observable<number>;
  moviesPage$ : Observable<number>;
  moviesLoading$ : Observable<boolean>;
  selectedMovie$ : Observable<Movie>;
  posterBaseUrl: string;

  constructor(private store: Store<fromRoot.State>) {
    this.movies$ = store.select(fromRoot.getMoviesEntities);
    this.moviesCount$ = store.select(fromRoot.getMoviesCount);
    this.moviesPage$ = store.select(fromRoot.getMoviesPage);
    this.moviesLoading$ = store.select(fromRoot.getMoviesLoadingState);
    this.selectedMovie$ = store.select(fromRoot.getMoviesSelectedMovie);
    this.posterBaseUrl = environment.posterBaseUrl;
  }

  ngOnInit() {
    this.store.dispatch(new movies.LoadMoviesAction({ page: 1}));
  }

  onMoviesPageChanged(page: number) {
    this.store.dispatch(new movies.LoadMoviesAction({ page }));
  }

  onMovieSelected(movie: Movie) {
    this.store.dispatch(new movies.SetSelectedMovieAction({ movie }));
  }
}
