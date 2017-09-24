import { Injectable, Inject } from "@angular/core";
import {
  Response,
  Http,
  Headers,
  RequestOptions,
  RequestMethod
} from "@angular/http";
import { Store } from "@ngrx/store";
import * as fromRoot from "../index";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs/Observable";
import { GetPopularMoviesResult } from "../../models/get-popular-movies-result";

const popularMoviesEndpoint = "discover/movie";

@Injectable()
export class MoviesService {
  constructor(private http: Http) {}

  getPopularMovies(page: number): Observable<GetPopularMoviesResult> {
    return this.http
      .request(
        `${environment.baseUrl}/${popularMoviesEndpoint}?sort_by=popularity.desc&page=${page}&api_key=${environment.apiKey}`,
        { method: RequestMethod.Get }
      )
      .map(response => response.json())
      .catch(response => {
        if (!environment.production) console.log(response);
        return Observable.throw(response);
      });
  }
}
