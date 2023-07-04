import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Reservation } from './reservations.component';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ReservationsFormService {
  private localStorageKey = 'reservation';

  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService
  ) {}

  private reservationSubject = new BehaviorSubject<Reservation | null>(
    this.localStorage.retrieveData(this.localStorageKey)
  );
  public reservation$ = this.reservationSubject.asObservable();

  postReservation = (reservation: Reservation) => {
    this.http
      .post<Reservation>(`${environment.apiUrl}/api/reservations`, reservation)
      .subscribe({
        next: (value) => {
          this.localStorage.storeData(this.localStorageKey, value);
          this.reservationSubject.next(value);
        },
        error: (err) => console.error(err),
      });
  };
}
