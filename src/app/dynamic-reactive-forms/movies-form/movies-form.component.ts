import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-movies-form',
  templateUrl: './movies-form.component.html',
  styles: [
    `
      .movie-group {
        border: 1px solid rgb(212, 212, 212);
        border-radius: 8px;
        padding: 15px;
      }
    `,
  ],
})
export class MoviesFormComponent {
  movieForm!: FormGroup;
  @Output()
  movieAddedEmiiter: EventEmitter<any> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
    this.movieForm = this.formBuilder.group({
      movies: this.formBuilder.array([]),
    });
  }
  initForm() {
    this.movieForm = this.formBuilder.group({
      movies: this.formBuilder.array([]),
    });
  }
  getMovies(): FormArray {
    return this.movieForm.get('movies') as FormArray;
  }
  getNewMovie(): FormGroup {
    return new FormGroup({
      bannerImageSrc: new FormControl(
        'https://tse3.mm.bing.net/th?id=OIP.hqgXmy-r13g-63xcvlz6AwHaE7&pid=Api&P=0&h=220'
      ),
      title: new FormControl(null),
      genre: new FormControl(null),
      description: new FormControl(null),
      imdb: new FormControl(null),
      cast: this.formBuilder.array([]),
    });
  }
  getCast(movieIndex: number): FormArray {
    return this.getMovies().at(movieIndex).get('cast') as FormArray;
  }
  getNewActor() {
    return new FormGroup({
      fullName: new FormControl(null),
      character: new FormControl(null),
      imageSource: new FormControl(null),
    });
  }
  onSubmitBtnClick() {
    this.movieAddedEmiiter.emit(this.movieForm.value.movies);
    console.log(this.movieForm, 'value is:');
    this.initForm();
  }
  // ------------------Functions to work with markup ----------------

  addNewMovieBtnClick(): void {
    this.getMovies().push(this.getNewMovie());
  }

  removeMovieBtnClick(movieIndex: number) {
    this.getMovies().removeAt(movieIndex);
  }
  addNewCastMemberBtnClick(movieIndex: number): void {
    this.getCast(movieIndex).push(this.getNewActor());
  }
  removeActorBtnClick(movieIndex: number, actorIndex: number): void {
    this.getCast(movieIndex).removeAt(actorIndex);
  }
}
