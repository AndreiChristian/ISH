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

  ngOnInit(): void {}
}
