import { Injectable } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { HttpClient } from '@angular/common/http';
import { of, BehaviorSubject, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  public isLoggedIn: Observable<boolean>;

  constructor(
    private storageService: LocalStorageService,
    private http: HttpClient
  ) {
    this.currentUserSubject = new BehaviorSubject<any>(
      this.storageService.retrieveData('guest')
    );
    this.currentUser = this.currentUserSubject.asObservable();
    this.isLoggedIn = this.currentUserSubject
      .asObservable()
      .pipe(map((user) => !!user)); // <-- And this line
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http
      .post(`${environment.apiUrl}/auth/login`, { email, password })
      .pipe(
        map((data: any) => {
          if (data && !data.error) {
            this.storageService.storeData('guest', data);
            this.currentUserSubject.next(data);
          } else {
            throw new Error('Invalid credentials');
          }
        }),
        catchError((err) => {
          console.log(err);
          throw err;
        })
      );
  }

  logout() {
    // Remove user from local storage
    this.storageService.removeData('guest');
    // Set current user to null
    this.currentUserSubject.next(null);
  }

  signup(user: any) {
    return this.http.post(`${environment.production}/auth/signup`, user).pipe(
      map((data: any) => {
        if (data && !data.error) {
          this.storageService.storeData('guest', data);
          this.currentUserSubject.next(data);
        } else {
          throw new Error('Invalid credentials');
        }
      }),
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }
}
