import { Injectable, Inject } from "@angular/core";
import { Response, Http, Headers, RequestOptions } from "@angular/http";
import { Store } from "@ngrx/store";
import * as fromRoot from "../index";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class MoviesService {
  public page: number;
  constructor(private store: Store<fromRoot.State>) {
    store.select(fromRoot.getMoviesPage).subscribe(page => {
      this.page = page;
    });
  }

  mockMoviesQuery = new BehaviorSubject({
    results: [{ title: "The Lord of The Rings" }, { title: "Pulp Fiction" }],
    resultCount: 2
  });

  fetch() {
    return this.mockMoviesQuery;
  }
}
