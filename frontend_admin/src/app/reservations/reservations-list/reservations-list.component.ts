import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../reservations.service';

@Component({
  selector: 'app-reservations-list',
  templateUrl: './reservations-list.component.html',
  styleUrls: ['./reservations-list.component.scss'],
})
export class ReservationsListComponent implements OnInit {
  constructor(private reservationsService: ReservationsService) {}

  ngOnInit(): void {
    this.reservationsService.getList();
    this.reservationsService.data$.subscribe((data) => console.log(data));
  }
}
