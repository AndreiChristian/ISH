import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface Reservation {
  id?: number;
  property_id: number;
  start_date: Date;
  end_date: Date;
  adults: number;
  kids: number;
  status: string;
  total_price: number;
}

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss'],
})
export class ReservationsComponent implements OnInit {
  constructor(private http: HttpClient) {}

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
  }
}
