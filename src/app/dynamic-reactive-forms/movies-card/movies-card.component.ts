import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-movies-card',
  templateUrl: './movies-card.component.html',
  styleUrl: './movies-card.component.css',
})
export class MoviesCardComponent {
  @Input()
  moviesList: any[] = [];
}
