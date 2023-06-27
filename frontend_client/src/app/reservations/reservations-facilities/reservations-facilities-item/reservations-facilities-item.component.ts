import { HttpClient } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReservationsService } from '../../reservations.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-reservations-facilities-item',
  templateUrl: './reservations-facilities-item.component.html',
  styleUrls: ['./reservations-facilities-item.component.scss'],
})
export class ReservationsFacilitiesItemComponent implements OnInit, OnDestroy {
  @Input() subcategory_id: number;

  facilities$: Observable<any>;

  constructor(
    private http: HttpClient,
    private reservationsService: ReservationsService
  ) {}

  isSelected: Observable<boolean>;

  ngOnInit(): void {
    console.log(this.subcategory_id);
    this.facilities$ = this.http.get(
      `${environment.apiUrl}/api/facilities/subcategory/${this.subcategory_id}`
    );
  }

  selectFacility(facility: any) {
    this.reservationsService.toggleFacility(facility);
  }

  ngOnDestroy(): void {}

  isFacilitySelectedFunc(facility): boolean {
    let isFacilitySelected: boolean;
    this.reservationsService
      .isFacilitySelected(facility)
      .subscribe((data) => (isFacilitySelected = data));
    return isFacilitySelected;
  }
}
