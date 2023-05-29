import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../reservations.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reservations-drawer',
  templateUrl: './reservations-drawer.component.html',
  styleUrls: ['./reservations-drawer.component.scss'],
})
export class ReservationsDrawerComponent implements OnInit {
  constructor(private reservationsService: ReservationsService) {}

  selectedFacilities$: Observable<any>;

  ngOnInit(): void {
    this.selectedFacilities$ = this.reservationsService.selectedFacilities$;
  }

  toggleFacility(faciltity) {
    this.reservationsService.toggleFacility(faciltity);
  }
}
