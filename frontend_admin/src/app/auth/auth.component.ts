import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  username: string;
  password: string;

  error: boolean = false;

  constructor(
    private router: Router,
    private http: HttpClient,
    private _snackBar: MatSnackBar
  ) {}

  onSubmit(loginForm: NgForm) {
    if (loginForm.valid) {
      this.http
        .post('http://127.0.0.1:8000/api/login/', {
          username: this.username,
          password: this.password,
        })
        .pipe(
          catchError((error: HttpErrorResponse) => {
            return throwError(error);
          })
        )
        .subscribe(
          (data: any) => console.log(this.router.navigate([''])),
          (error) => {
            // Handle the error in your component, for example, show an error message
            this._snackBar.open(`Login failed: Invalid credentials`, 'Close', {
              duration: 5000,
            });
          }
        );
    }
  }
}
