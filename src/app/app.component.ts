import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import * as fromRoot from './common/index';
import * as movies from './common/movies/movies.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public movies$: Observable<any>;
  public moviesCount$:Observable<number>;
  public moviesPage$:Observable<number>;
  public moviesLoading$:Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.movies$ = store.select(fromRoot.getMoviesEntities);
    this.moviesCount$ = store.select(fromRoot.getMoviesCount);
    this.moviesPage$ = store.select(fromRoot.getMoviesPage);
    this.moviesLoading$ = store.select(fromRoot.getMoviesLoadingState);
  }

  ngOnInit() {
    this.store.dispatch(new movies.LoadMoviesAction({ page: 1}));
  }

  onMoviesPageChanged(page:number) {
    this.store.dispatch(new movies.LoadMoviesAction({ page }));
  }
}
