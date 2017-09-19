import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent { 
  @Input() movies:any;
  @Input() count:number;
  @Input() page:number;
  @Input() loading:boolean; 
  
  @Output() onPageChanged = new EventEmitter<number>();
}
