import { Component } from '@angular/core';
import { ReservationsService } from '../../reservations.service';

@Component({
  selector: 'app-reservations-list-upcoming',
  templateUrl: './reservations-list-upcoming.component.html',
  styleUrls: ['./reservations-list-upcoming.component.scss']
})
export class ReservationsListUpcomingComponent {
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

      return checkin.getTime() > now.getTime();
    });
    this.dataSource = this.reservations;
  }
}
