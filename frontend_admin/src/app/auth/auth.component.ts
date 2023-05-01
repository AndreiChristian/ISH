import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  username: string;
  password: string;

  error: boolean = false;

  constructor(private authService: AuthService) {}

  onSubmit(loginForm: NgForm) {
    if (loginForm.valid) {
      this.authService.login({
        username: this.username,
        password: this.password,
      });
    }
  }
}
