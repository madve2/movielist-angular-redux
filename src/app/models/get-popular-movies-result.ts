import { Movie } from "./Movie";

export interface GetPopularMoviesResult {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}