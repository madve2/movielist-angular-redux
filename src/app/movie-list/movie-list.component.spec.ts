import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListComponent } from './movie-list.component';
import { MoviesMockService } from "../../mocks/movies-mock.service";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;
  const mockMovies = new MoviesMockService().movies;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListComponent ],
      imports: [
        NgbModule.forRoot(),
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a progress bar while loading', () => {
    component.loading = true;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('ngb-progressbar')).toBeTruthy();
  });

  it('should display a retry button on error', () => {
    component.loaded = false;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a').textContent).toContain('Retry');
  });

  it('should display all movies', () => {
    component.movies = mockMovies.slice(0, 20);
    component.loaded = true;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.list-group-item').length).toEqual(20);
  });
});
