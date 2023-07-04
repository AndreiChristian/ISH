import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ReservationProfilesService {
  constructor(private http: HttpClient) {}

  private ReservationProfilesSubject = new BehaviorSubject<any[]>(null);
  public reservationProfiles$: Observable<any> =
    this.ReservationProfilesSubject.asObservable();

  getReservationProfiles(reservationId: number) {
    this.http
      .get(`${environment.apiUrl}/api/reservations_profiles/${reservationId}`)
      .subscribe({
        next(value) {
          value? console.log(value):console.log("No data")
        },
        error(err) {
          console.error(err);
        },
      });
  }

  postReservationProfiles() {}
}
