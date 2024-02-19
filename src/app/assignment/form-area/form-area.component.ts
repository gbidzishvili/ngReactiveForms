import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-area',
  templateUrl: './form-area.component.html',
  styleUrl: './form-area.component.css',
})
export class FormAreaComponent {
  @Output()
  userFormEmitter: EventEmitter<any> = new EventEmitter();
  userForm: FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.userForm = new FormGroup({
      fullName: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-Zs]+$'),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      status: new FormControl(),
      jobInfo: new FormGroup({
        position: new FormControl(),
        experience: new FormControl(),
        description: new FormControl(),
      }),
    });
  }
  onSubmitBtnClick() {
    console.log(this.userForm.value.fullName);
    this.userForm.value.registrationDate = new Date();
    this.userFormEmitter.emit(this.userForm.value);
    this.userForm.reset();
  }
}
