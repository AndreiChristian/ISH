import { Component } from '@angular/core';
import { Facility } from '../reservations-configure/reservations-configure.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
export class ReservationsFacilitiesComponent {
  constructor(private http: HttpClient) {}

  facilities$: Observable<Facility[]>;

  newProfileFacility: ProfileFacility = {
    requested_call: false,
    facility_id: 1,
    profile_id: 1,
  };

  ngOnInit(): void {
    this.facilities$ = this.http.get<Facility[]>(
      'http://localhost:8080/api/facilities'
    );
    this.facilities$.subscribe((data) => console.log(data));
  }

  postFacility(facility_id: number) {
    this.http.post(
      'http://localhost:8080/api/profile_facilities',
      this.newProfileFacility
    );
  }
}
