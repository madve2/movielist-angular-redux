import { Action } from "@ngrx/store";
import { GetPopularMoviesResult } from "../../models/get-popular-movies-result";
import { Movie } from "../../models/Movie";

export const MovieActionTypes = {
  LOAD: "Load movies",
  LOAD_SUCCESS: "Successfully loaded movies",
  LOAD_FAILURE: "Failed to load movies",
  SET_SELECTED: "Set selected movie"
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
export class SetSelectedMovieAction implements Action {
  type = MovieActionTypes.SET_SELECTED;
  constructor(public payload: { movie: Movie }){}
}

export type MovieActions = LoadMoviesAction | LoadMoviesFailedAction | LoadMoviesSuccessAction | SetSelectedMovieAction;
