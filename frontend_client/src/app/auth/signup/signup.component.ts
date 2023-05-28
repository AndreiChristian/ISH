import { Component } from '@angular/core';
import { Guest } from '../auth.component';
import { HttpClient } from '@angular/common/http';

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

  submit() {
    console.table(this.newGuest);
    this.http
      .post('http://localhost:8080/api/guests', this.newGuest)
      .subscribe((data) => console.log(data));
  }
}
