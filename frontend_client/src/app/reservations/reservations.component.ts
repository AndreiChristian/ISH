import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface Reservation {
  creator_id?: number;
  id?: number;
  property_id: number;
  start_date: Date | null;
  end_date: Date | null;
  adults: number;
  children: number;
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

  ngOnInit(): void {
    console.log(environment.apiUrl);
  }
}
