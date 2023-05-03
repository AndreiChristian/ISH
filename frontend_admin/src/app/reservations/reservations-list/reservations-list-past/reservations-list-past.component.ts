import { Component } from '@angular/core';
import { ReservationsService } from '../../reservations.service';

@Component({
  selector: 'app-reservations-list-past',
  templateUrl: './reservations-list-past.component.html',
  styleUrls: ['./reservations-list-past.component.scss'],
})
export class ReservationsListPastComponent {
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

      return checkout.getTime() < now.getTime();
    });
    this.dataSource = this.reservations;
  }
}
