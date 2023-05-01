import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  email: string;
  password: string;

  error: boolean = false;

  constructor(private router: Router) {}

  onSubmit(loginForm: NgForm) {
    if (loginForm.valid) {
      if (
        this.email === 'andreichristiannetoiu@gmail.com' &&
        this.password === 'andreicod9A'
      ) {
        console.log('is ok');
        this.router.navigate(['/']);
      } else {
        this.error = true;
      }
    }
  }
}
