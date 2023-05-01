import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject = new BehaviorSubject<any>({});
  public user$ = this.userSubject.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  login(data: any) {
    this.http
      .post('http://127.0.0.1:8000/api/login/', data)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
      )
      .subscribe(
        (data: any) => {
          this.userSubject.next(data.user);
          this.router.navigate(['']);
        },
        (error) => {
          // Handle the error in your component, for example, show an error message
          this._snackBar.open(`Login failed: Invalid credentials`, 'Close', {
            duration: 5000,
          });
        }
      );
  }
}
