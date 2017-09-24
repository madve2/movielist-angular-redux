import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromMovies from "./movies/movies.reducer";

export interface State {
  movies: fromMovies.State
}

export const reducers: ActionReducerMap<State> = {
  movies: fromMovies.reducer
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : [];

export const getMoviesState = createFeatureSelector<fromMovies.State>('movies');;
export const getMoviesEntities = createSelector(
  getMoviesState,
  fromMovies.getEntities
);
export const getMoviesCount = createSelector(
  getMoviesState,
  fromMovies.getCount
);
export const getMoviesPage = createSelector(getMoviesState, fromMovies.getPage);
export const getMoviesLoaded = createSelector(
  getMoviesState,
  fromMovies.getLoaded
);
export const getMoviesLoading = createSelector(
  getMoviesState,
  fromMovies.getLoading
);
export const getMoviesSelectedMovie = createSelector(getMoviesState, fromMovies.getSelectedMovie)
