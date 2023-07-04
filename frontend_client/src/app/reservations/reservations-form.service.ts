import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Reservation } from './reservations.component';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ReservationsFormService {
  constructor(private http: HttpClient) {}

  private reservationSubject = new BehaviorSubject<Reservation | null>(null);
  public reservation$ = this.reservationSubject.asObservable();

  postReservation = (reservation: Reservation) => {
    this.http
      .post(`${environment.apiUrl}/api/reservations`, reservation)
      .subscribe((data) => console.log(data));
  };
}
