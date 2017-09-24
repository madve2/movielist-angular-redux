import * as movies from "./movies.actions";
import { Movie } from "../../models/Movie";
import { Action } from "@ngrx/store";

export interface State {
  loaded: boolean;
  loading: boolean;
  entities: Movie[];
  count: number;
  page: number;
  selectedMovie: Movie
}

const initialState: State = {
  loaded: false,
  loading: false,
  entities: [],
  count: 0,
  page: 1,
  selectedMovie: null
};

export function reducer(
  state = initialState,
  action: Action
): State {
  switch (action.type) {
    case movies.MovieActionTypes.LOAD: {
      const page = (action as movies.LoadMoviesAction).payload.page;
      return Object.assign({}, state, {
        loaded: false,
        loading: true,
        page
      });
    }
    case movies.MovieActionTypes.LOAD_SUCCESS: {
      const successAction = action as movies.LoadMoviesSuccessAction;
      const movies = successAction.payload.results;
      const moviesCount = successAction.payload.total_results;
      return Object.assign({}, state, {
        loaded: true,
        loading: false,
        entities: movies,
        count: moviesCount
      });
    }
    case movies.MovieActionTypes.LOAD_FAILURE: {
      return Object.assign({}, state, {
        loaded: false,
        loading: false,
        entities: [],
        count: 0
      });
    }
    case movies.MovieActionTypes.SET_SELECTED: {
      const movie = (action as movies.SetSelectedMovieAction).payload.movie;
      return Object.assign({}, state, {
        selectedMovie: movie
      });
    }
    default:
      return state;
  }
}

export const getEntities = (state: State) => state.entities;
export const getPage = (state: State) => state.page;
export const getCount = (state: State) => state.count;
export const getLoading = (state: State) => state.loading;
export const getLoaded = (state: State) => state.loaded;
export const getSelectedMovie = (state: State) => state.selectedMovie;
