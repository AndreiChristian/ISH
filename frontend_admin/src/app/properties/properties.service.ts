import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable, catchError, of, tap } from 'rxjs';

interface TreeNode {
  name: string;
  children?: TreeNode[];
}
@Injectable({
  providedIn: 'root',
})
export class PropertiesService {
  private baseUrl: string = 'http://127.0.0.1:8000/api/new_test_properties/';

  private dataSubject = new BehaviorSubject<any>(null);
  public data$: Observable<any> = this.dataSubject.asObservable();

  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$: Observable<boolean> = this.loadingSubject.asObservable();

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {}

  getList() {
    this.loadingSubject.next(true);
    this.http
      .get(this.baseUrl)
      .pipe(
        catchError((error) => {
          console.error('An error occurred:', error);
          this._snackBar.open('Error fetching data', 'Close', {
            duration: 5000,
          });
          return of(null);
        }),
        tap((data) => {
          this.dataSubject.next(data);
          this.loadingSubject.next(false);
        })
      )
      .subscribe();
  }

  getOne(id: number) {
    this.loadingSubject.next(true);
    this.http
      .get(`${this.baseUrl}${id}/`)
      .pipe(
        catchError((error) => {
          console.error('An error occurred:', error);
          this._snackBar.open('Error fetching data', 'Close', {
            duration: 5000,
          });
          return of(null);
        }),
        tap((data) => {
          this.dataSubject.next(data);
          this.loadingSubject.next(false);
        })
      )
      .subscribe();
  }

  post(data: any) {
    this.loadingSubject.next(true);
    this.http
      .post(`${this.baseUrl}`, data)
      .pipe(
        catchError((error) => {
          console.error('An error occurred:', error);
          this._snackBar.open('Error posting data', 'Close', {
            duration: 5000,
          });
          return of(null);
        }),
        tap((response) => {
          this.loadingSubject.next(false);
          this._snackBar.open('Region posted successfully', 'Close', {
            duration: 5000,
          });
        })
      )
      .subscribe();
  }

  put(data: any) {
    this.loadingSubject.next(true);
    this.http
      .put(`${this.baseUrl}`, data)
      .pipe(
        catchError((error) => {
          console.error('An error occurred:', error);
          this._snackBar.open('Error updating data', 'Close', {
            duration: 5000,
          });
          return of(null);
        }),
        tap((response) => {
          this.loadingSubject.next(false);
          this._snackBar.open('Region updated successfully', 'Close', {
            duration: 5000,
          });
        })
      )
      .subscribe();
  }

  delete(id: number) {
    this.loadingSubject.next(true);
    this.http
      .delete(`${this.baseUrl}${id}`)
      .pipe(
        catchError((error) => {
          console.error('An error occurred:', error);
          this._snackBar.open('Error deleting data', 'Close', {
            duration: 5000,
          });
          return of(null);
        }),
        tap((response) => {
          this.loadingSubject.next(false);
          this._snackBar.open('Region deleted successfully', 'Close', {
            duration: 5000,
          });
        })
      )
      .subscribe();
  }
}
