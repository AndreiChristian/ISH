import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../reservations.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reservations-list',
  templateUrl: './reservations-list.component.html',
  styleUrls: ['./reservations-list.component.scss'],
})
export class ReservationsListComponent implements OnInit {
  constructor(private reservationsService: ReservationsService) {}

  data$: Observable<any>;

  ngOnInit(): void {
    this.reservationsService.getList();
    this.data$ = this.reservationsService.data$;
    this.reservationsService.data$.subscribe((data) => console.log(data));
  }
}
