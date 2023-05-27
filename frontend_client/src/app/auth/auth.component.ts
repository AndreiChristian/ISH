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
}
