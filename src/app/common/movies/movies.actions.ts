import { Action } from "@ngrx/store";
import { GetPopularMoviesResult } from "../../models/get-popular-movies-result";

export const MovieActionTypes = {
  LOAD: "Load movies",
  LOAD_SUCCESS: "Successfully loaded movies",
  LOAD_FAILURE: "Failed to load movies"
};

export class LoadMoviesAction implements Action {
  type = MovieActionTypes.LOAD;
  constructor(public payload: { page: number }) {}
}
export class LoadMoviesFailedAction implements Action {
  type = MovieActionTypes.LOAD_FAILURE;
  constructor() {}
}
export class LoadMoviesSuccessAction implements Action {
  type = MovieActionTypes.LOAD_SUCCESS;
  constructor(public payload: GetPopularMoviesResult) {}
}

export type MovieActions = LoadMoviesAction | LoadMoviesFailedAction | LoadMoviesSuccessAction;
