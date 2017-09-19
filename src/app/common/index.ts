/*import { createSelector, createFeatureSelector } from "@ngrx/store";
import { storeLogger } from "ngrx-store-logger";
import * as fromMovies from "./movies/movies.reducer";

import { compose } from "@ngrx/core";
import { combineReducers } from "@ngrx/store";

export interface AppState {
  movies: fromMovies.State;
}

export const reducers = { movies: fromMovies.reducer };

const developmentReducer: Function = compose(storeLogger(), combineReducers)(
  reducers
);

export function metaReducer(state: any, action: any) {
  return developmentReducer(state, action);
}*/


import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromMovies from "./movies/movies.reducer";
import { storeFreeze } from 'ngrx-store-freeze';

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
  ? [logger, storeFreeze]
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
export const getMoviesLoadingState = createSelector(
  getMoviesState,
  fromMovies.getLoadingState
);
