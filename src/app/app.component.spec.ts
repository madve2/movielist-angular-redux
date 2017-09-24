import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MovieDetailsComponent } from "./movie-details/movie-details.component";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { StoreModule } from "@ngrx/store";
import { reducers, metaReducers } from "./common/index";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { EffectsModule } from "@ngrx/effects";
import { MovieEffects } from "./common/movies/movies.effects";
import { MoviesService } from "./common/movies/movies.service";
import { MoviesMockService } from "../mocks/movies-mock.service";
describe("AppComponent", () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent, MovieListComponent, MovieDetailsComponent],
        imports: [
          StoreModule.forRoot(reducers, { metaReducers }),
          NgbModule.forRoot(),
          EffectsModule.forRoot([MovieEffects])
        ],
        providers: [{ provide: MoviesService, useClass: MoviesMockService }]
      }).compileComponents();
    })
  );
  it(
    "should create the app",
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );
  it(
    "should contain a movie-list",
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector("movie-list")).toBeTruthy();
    })
  );
  it(
    "should contain movie-details",
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector("movie-details")).toBeTruthy();
    })
  );
});
