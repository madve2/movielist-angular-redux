import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsComponent } from './movie-details.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;
  let movie = {
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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailsComponent ],
      imports: [
        NgbModule.forRoot(),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display an alert info when no movie is selected', () => {
    component.movie = null;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.alert-info')).toBeTruthy();
  });

  it('should display the movie title', () => {
    component.movie = movie;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain(movie.title);
  });

  it('should display the movie overview', () => {
    component.movie = movie;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(movie.overview);
  });

  it('should display the poster when present', () => {
    component.movie = movie;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('img')).toBeTruthy();
  });

  it('should not display the poster when the movie doesn\'t have one', () => {
    component.movie = {...movie, poster_path: null};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('img')).toBeFalsy();
  });

  it('should display the movie rating', () => {
    component.movie = movie;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('ngb-rating').getAttribute('aria-valuenow')).toEqual('' + movie.vote_average);
  });
});
