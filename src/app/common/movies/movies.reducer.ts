import * as movies from "./movies.actions";
import { Movie } from "../../models/Movie";

export interface State {
  loaded: boolean;
  loading: boolean;
  entities: Movie[];
  count: number;
  page: number;
}

const initialState: State = {
  loaded: false,
  loading: false,
  entities: [],
  count: 0,
  page: 1
};

export function reducer(
  state = initialState,
  action: movies.MovieActions
): State {
  switch (action.type) {
    case movies.MovieActionTypes.LOAD: {
      const page = (action as movies.LoadMoviesAction).payload.page;
      return Object.assign({}, state, {
        loading: true,
        page:
          page == null ? state.page : page
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
        loaded: true,
        loading: false,
        entities: [],
        count: 0
      });
    }
    default:
      return state;
  }
}

export const getEntities = (state: State) => state.entities;
export const getPage = (state: State) => state.page;
export const getCount = (state: State) => state.count;
export const getLoadingState = (state: State) => state.loading;
