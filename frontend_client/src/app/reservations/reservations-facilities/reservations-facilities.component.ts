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
  constructor(private reservationsService: ReservationsService) {}

  ngOnInit(): void {
    this.reservationsService.getFacilityCategories();
    console.log('fetching data');
  }

  ngOnDestroy(): void {}
}
