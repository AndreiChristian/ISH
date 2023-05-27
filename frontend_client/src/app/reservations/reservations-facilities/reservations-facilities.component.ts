import { Component, OnDestroy, OnInit } from '@angular/core';
import { Facility } from '../reservations-configure/reservations-configure.component';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { ReservationsService } from '../reservations.service';

export interface ProfileFacility {
  profile_id: number;
  facility_id: number;
  requested_call: boolean;
}
@Component({
  selector: 'app-reservations-facilities',
  templateUrl: './reservations-facilities.component.html',
  styleUrls: ['./reservations-facilities.component.scss'],
})
export class ReservationsFacilitiesComponent implements OnInit, OnDestroy {
  constructor(
    private http: HttpClient,
    private reservationsService: ReservationsService
  ) {}

  facilities$: Observable<Facility[]>;

  subscription: Subscription;

  profile_id: number;

  ngOnInit(): void {
    this.facilities$ = this.http.get<Facility[]>(
      'http://localhost:8080/api/facilities'
    );
    this.facilities$.subscribe((data) => console.log(data));
    this.subscription = this.reservationsService.selectedProfile$.subscribe(
      (data) => {
        if (data) {
          this.profile_id = data.id;
        }
      }
    );
  }

  postFacility(facility_id: number) {
    const newProfileFacility: ProfileFacility = {
      facility_id,
      profile_id: this.profile_id,
      requested_call: false,
    };

    console.log(newProfileFacility);

    this.http
      .post('http://localhost:8080/api/profile_facility', newProfileFacility)
      .subscribe((data) => console.log(data));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
