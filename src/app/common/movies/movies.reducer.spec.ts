import * as movies from "./movies.actions";
import { Movie } from "../../models/Movie";                                   
import { reducer, State } from "./movies.reducer";

describe('Movies reducer', () => {
    const movie = {
        vote_count: 4578,
        id: 211672,
        video: false,
        vote_average: 6.4,
        title: "Minions",
        popularity: 898.484189,
        poster_path: "/q0R4crx2SehcEEQEkYObktdeFy.jpg",
        original_language: "en",
        original_title: "Minions",
        genre_ids: [10751, 16, 12, 35],
        backdrop_path: "/uX7LXnsC7bZJZjn048UCOwkPXWJ.jpg",
        adult: false,
        overview:
          "Minions Stuart, Kevin and Bob are recruited by Scarlet Overkill, a super-villain who, alongside her inventor husband Herb, hatches a plot to take over the world.",
        release_date: "2015-06-17"
    }
    const initialState: State = {
        loaded: false,
        loading: false,
        entities: [],
        count: 0,
        page: 1,
        selectedMovie: null
    };
    const loadedSampleState: State = {
        loaded: true,
        loading: false,
        entities: [ movie ],
        count: 1,
        page: 1,
        selectedMovie: movie
    };
    const loadingSampleState = Object.assign({}, loadedSampleState, {
        loaded: false,
        loading: true,
        page: 2
    })
    
  it('should handle initial state', () => {
    const expectedState = initialState;
    expect(                                                         
      reducer(undefined, { type: '' })                                             
    )                                                                    
    .toEqual(expectedState);                                                  
  });
  it('should handle loading an initial page of movies', () => {
    const expectedState = Object.assign({}, initialState, {
        loaded: false,
        loading: true,
        page: 1
    })
    expect(                                                         
      reducer(initialState, new movies.LoadMoviesAction( { page: 1 }))                                             
    )                                                                    
    .toEqual(expectedState);                                                  
  });
  it('should handle loading another page of movies', () => {
    const expectedState = Object.assign({}, loadedSampleState, {
        loaded: false,
        loading: true,
        page: 2
    })
    expect(                                                         
      reducer(loadedSampleState, new movies.LoadMoviesAction( { page: 2 }))                                             
    )                                                                    
    .toEqual(expectedState);                                                  
  });
  it('should handle loading success', () => {
    const sampleMovieList = [ movie, movie, movie ];
    const expectedState = Object.assign({}, loadingSampleState, {
        loaded: true,
        loading: false,
        entities: sampleMovieList,
        count: 15
    })
    expect(                                                         
      reducer(loadingSampleState, new movies.LoadMoviesSuccessAction(
          {
              page: 2,
              total_pages: 5,
              total_results: 15,
              results: sampleMovieList
          }
      ))                                             
    )                                                                    
    .toEqual(expectedState);                                                  
  });  
  it('should handle loading failure', () => {
    const expectedState = Object.assign({}, loadingSampleState, {
        loaded: false,
        loading: false,
        entities: [],
        count: 0
    })
    expect(                                                         
      reducer(loadingSampleState, new movies.LoadMoviesFailedAction())                                             
    )                                                                    
    .toEqual(expectedState);                                                  
  });
  it('should handle setting the selected movie', () => {
    const loadedStateWithoutSelection = { ...loadedSampleState, selectedMovie: null };
    const expectedState = Object.assign({}, loadedSampleState, {
        selectedMovie: movie
    })
    expect(                                                         
      reducer(loadedStateWithoutSelection, new movies.SetSelectedMovieAction( { movie }))                                             
    )                                                                    
    .toEqual(expectedState);                                                  
  });                                                                                                                
});