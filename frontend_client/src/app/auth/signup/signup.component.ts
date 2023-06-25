import { Component } from '@angular/core';
import { Guest } from '../auth.component';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  newGuest: any = {
    first_name: '',
    last_name: '',
    password: '',
    email: '',
    addressId: 0,
    phoneNumber: '',
  };

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  submit(form: NgForm) {
    console.table(form.value);
    this.authService.signup(form.value).subscribe((data) => console.log(data));
    console.log('Hello');
    this.router.navigate(['/']);
  }
}
