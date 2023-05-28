import { HttpClient } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reservations-facilities-item',
  templateUrl: './reservations-facilities-item.component.html',
  styleUrls: ['./reservations-facilities-item.component.scss'],
})
export class ReservationsFacilitiesItemComponent implements OnInit, OnDestroy {
  @Input() subcategory_id: number;

  facilities$: Observable<any>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.facilities$ = this.http.get(
      `http://localhost:8080/api/facilities/subcategory/${this.subcategory_id}`
    );
  }

  ngOnDestroy(): void {}
}
