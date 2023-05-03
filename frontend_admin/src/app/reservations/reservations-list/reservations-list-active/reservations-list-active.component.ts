import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../../reservations.service';

@Component({
  selector: 'app-reservations-list-active',
  templateUrl: './reservations-list-active.component.html',
  styleUrls: ['./reservations-list-active.component.scss'],
})
export class ReservationsListActiveComponent implements OnInit {
  displayedColumns: string[] = ['property', 'start', 'end', 'guests'];
  dataSource;
  reservations: any[];

  constructor(private reservationsService: ReservationsService) {}

  ngOnInit(): void {
    this.reservationsService.data$.subscribe(
      (data) => (this.reservations = data)
    );

    this.reservations = this.reservations.filter((element) => {
      const now = new Date();
      const checkin = new Date(element.start_date);
      const checkout = new Date(element.end_date);

      return (
        checkin.getTime() < now.getTime() && checkout.getTime() > now.getTime()
      );
    });
    this.dataSource = this.reservations;
  }
}
