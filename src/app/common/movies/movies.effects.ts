import "rxjs/add/operator/map";
import "rxjs/add/observable/of";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/switchMap";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import * as movies from "./movies.actions";
import { Actions, Effect } from "@ngrx/effects";
import { MoviesService } from "./movies.service";
import { LoadMoviesAction, LoadMoviesSuccessAction, LoadMoviesFailedAction } from "./movies.actions";

@Injectable()
export class MovieEffects {

  constructor(private actions: Actions, private service: MoviesService) {}
  
  @Effect()
  loadMovies$ = this.actions
    .ofType(movies.MovieActionTypes.LOAD)
    .switchMap(a => {
      const page = (a as LoadMoviesAction).payload.page;
      return this.service.getPopularMovies(page)
        .map(result =>  new LoadMoviesSuccessAction(result))
        .catch(() => Observable.of(new LoadMoviesFailedAction()));
    });
}
