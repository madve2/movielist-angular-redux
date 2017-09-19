import { Injectable, Inject } from "@angular/core";
import { Response, Http, Headers, RequestOptions, RequestMethod } from "@angular/http";
import { Store } from "@ngrx/store";
import * as fromRoot from "../index";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs/Observable";
import { GetPopularMoviesResult } from "../../models/get-popular-movies-result";
import { MoviesApiMock } from "../../../mocks/movies-api-mock";

const popularMoviesEndpoint = 'discover/movie?sort_by=popularity.desc';

@Injectable()
export class MoviesService {
  public page: number;
  constructor(private store: Store<fromRoot.State>, private http: Http) {
    store.select(fromRoot.getMoviesPage).subscribe(page => {
      this.page = page;
    });
  }

  private apiMock = new MoviesApiMock(); //TODO DI
  getPopularMovies(page: number) : Observable<GetPopularMoviesResult> {
      if (environment.baseUrl) {
        return this.http.request(`${environment.baseUrl}/${popularMoviesEndpoint}`, { method: RequestMethod.Get })
          .map(response => response.json())
          .catch(response => {
            if (!environment.production)
              console.log(response);
            return Observable.throw(response);
          });
      } else {
        return this.apiMock.getPopularMovies(page);
      }
  }
}
