import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-reactive-forms',
  templateUrl: './dynamic-reactive-forms.component.html',
  styleUrl: './dynamic-reactive-forms.component.css',
})
export class DynamicReactiveFormsComponent {
  elementToShow = 1;
  movies: any[] = [];
  showElementBtnClick(number: number) {
    this.elementToShow = number;
  }
  addedMovieSubs(movie: any) {
    console.log('movieIs', movie);
    this.movies = this.movies.concat(movie);
  }
}
