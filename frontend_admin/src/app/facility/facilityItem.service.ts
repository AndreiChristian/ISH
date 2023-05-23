import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable, catchError, of, tap } from 'rxjs';
import { FacilityItem } from './facility.models';

@Injectable({
  providedIn: 'root',
})
export class FacilityItemService {
  private baseUrl: string = 'http://127.0.0.1:8080/api/facility_items/';

  private dataSubject = new BehaviorSubject<FacilityItem>(null);
  public data$: Observable<FacilityItem> = this.dataSubject.asObservable();

  private listSubject = new BehaviorSubject<FacilityItem[]>(null);
  public dataList$: Observable<FacilityItem[]> =
    this.listSubject.asObservable();

  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$: Observable<boolean> = this.loadingSubject.asObservable();

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {}

  getList() {
    this.loadingSubject.next(true);
    this.http
      .get<FacilityItem[] | null>(this.baseUrl)
      .pipe(
        catchError((error) => {
          console.error('An error occurred:', error);
          this._snackBar.open('Error fetching data', 'Close', {
            duration: 5000,
          });
          return of(null);
        }),
        tap((data) => {
          this.listSubject.next(data);
          this.loadingSubject.next(false);
        })
      )
      .subscribe();
  }

  getOne(id: number) {
    this.loadingSubject.next(true);
    this.http
      .get<FacilityItem | null>(`${this.baseUrl}${id}`)
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

  post(data: FacilityItem) {
    this.loadingSubject.next(true);
    this.http
      .post(this.baseUrl, data)
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
          this._snackBar.open('Facility item posted successfully', 'Close', {
            duration: 5000,
          });
        })
      )
      .subscribe();
  }

  update(data: FacilityItem, id: number) {
    this.loadingSubject.next(true);
    this.http
      .put(`${this.baseUrl}${id}`, data)
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
          this._snackBar.open('Facility item updated successfully', 'Close', {
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
          this._snackBar.open('Facility item deleted successfully', 'Close', {
            duration: 5000,
          });
        })
      )
      .subscribe();
  }
}
