import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/switchMap";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import * as movies from "./movies.actions";
import { Actions, Effect } from "@ngrx/effects";
import { MoviesService } from "./movies.service";
import { LoadMoviesSuccessAction } from "./movies.actions";
import { LoadMoviesFailedAction } from "./movies.actions";

@Injectable()
export class MovieEffects {

  constructor(private _actions: Actions, private _service: MoviesService) {}
  
  @Effect()
  loadMovies$ = this._actions
    .ofType(movies.MovieActionTypes.LOAD)
    .switchMap(() =>
      this._service.fetch().map(result => {
        return new LoadMoviesSuccessAction( result );
      })
    )
    .catch(() => Observable.of(new LoadMoviesFailedAction()));
}
