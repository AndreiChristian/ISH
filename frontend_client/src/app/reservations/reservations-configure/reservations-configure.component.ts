import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

interface Facility {
  id?: number;
  name: string;
  description: string;
  image_url: string;
  category_id: number;
  subcategory_id: number;
  created_at?: string;
  updated_at?: string | null;
}

@Component({
  selector: 'app-reservations-configure',
  templateUrl: './reservations-configure.component.html',
  styleUrls: ['./reservations-configure.component.scss'],
})
export class ReservationsConfigureComponent implements OnInit {
  constructor(private http: HttpClient) {}

  facilities$: Observable<Facility[]>;

  ngOnInit(): void {
    this.facilities$ = this.http.get<Facility[]>(
      'http://localhost:8080/api/facilities'
    );
    this.facilities$.subscribe((data) => console.log(data));
  }
}
