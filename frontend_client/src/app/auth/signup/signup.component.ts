import { Component } from '@angular/core';
import { Guest } from '../auth.component';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  newGuest: Guest = {
    first_name: '',
    last_name: '',
    password: '',
    email: '',
    addressId: 0,
    phoneNumber: '',
  };

  constructor(private http: HttpClient) {}

  submit(form: NgForm) {
    console.table(form.value);
    console.log(form.valid);
  }
}
