import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  guest = {
    email: '',
    password: '',
  };

  invalidCredentials: boolean = false;

  login() {
    this.authService.login(this.guest.email, this.guest.password).subscribe({
      next: (data) => {
        this.router.navigate(['']);
      },
      error: (err) => {
        console.log(err);
        this.invalidCredentials = true;
      },
    });
  }
}
