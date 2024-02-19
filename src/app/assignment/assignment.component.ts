import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrl: './assignment.component.css',
})
export class AssignmentComponent {
  usersList: any = [];
  onUserFormEmitterSubs(form: string) {
    this.usersList.push(form);
  }
}
