import { Component } from '@angular/core';
import { Reservation } from '../reservations.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservations-form',
  templateUrl: './reservations-form.component.html',
  styleUrls: ['./reservations-form.component.scss'],
})
export class ReservationsFormComponent {
  constructor(private http: HttpClient, private router: Router) {}

  newReservation: Reservation = {
    property_id: 0,
    adults: 0,
    start_date: new Date(),
    end_date: new Date(),
    kids: 0,
    status: 'test',
    total_price: 0,
  };

  ngOnInit(): void {
    // this.http.post("")
  }

  postReservation() {
    console.table(this.newReservation);
    this.http
      .post('http://localhost:8080/api/reservations', this.newReservation)
      .subscribe((data) => console.log(data));

    this.router.navigate(['reservations', 'confirmation']);
  }
}
