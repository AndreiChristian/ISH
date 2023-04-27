import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegionService {
  private dataSubject = new BehaviorSubject<any>(null);
  public data$: Observable<any> = this.dataSubject.asObservable();

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {}

  getData() {
    this.http
      .get('https://api.example.com/data')
      .pipe(
        catchError((error) => {
          console.error('An error occurred:', error);
          this._snackBar.open('Error fetching data', 'Close', {
            duration: 5000,
          });
          return of(null);
        }),
        tap((data) => this.dataSubject.next(data))
      )
      .subscribe();
  }
}
