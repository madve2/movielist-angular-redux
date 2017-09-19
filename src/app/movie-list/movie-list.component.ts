import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Movie } from "../models/Movie";

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent { 
  @Input() movies:Movie[];
  @Input() count:number;
  @Input() page:number;
  @Input() loading:boolean; 
  
  @Output() onPageChanged = new EventEmitter<number>();
  @Output() onMovieSelected = new EventEmitter<Movie>();
}
