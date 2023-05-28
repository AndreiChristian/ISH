import { Injectable } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private storageService: LocalStorageService,
    private http: HttpClient
  ) {}

  login(email: string, password: string): Observable<any> {
    return this.http
      .post('http://localhost:8080/auth/login', { email, password })
      .pipe(
        map((data: any) => {
          if (data.error) {
            throw new Error('Invalid credentials');
          }

          // store only the necessary data, not the entire response
          this.storageService.storeData('guest', data);

          return data;
        }),
        catchError((err) => {
          console.error(err);
          return throwError(err);
        })
      );
  }



}
