import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

export interface Guest {
  id?: number;
  first_name: string;
  last_name: string;
  email: string;
  phoneNumber: string;
  addressId: number;
  password: string;
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
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
