import { Component } from '@angular/core';
import { Facility } from '../reservations-configure/reservations-configure.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reservations-facilities',
  templateUrl: './reservations-facilities.component.html',
  styleUrls: ['./reservations-facilities.component.scss'],
})
export class ReservationsFacilitiesComponent {
  constructor(private http: HttpClient) {}

  facilities$: Observable<Facility[]>;

  ngOnInit(): void {
    this.facilities$ = this.http.get<Facility[]>(
      'http://localhost:8080/api/facilities'
    );
    this.facilities$.subscribe((data) => console.log(data));
  }
}
