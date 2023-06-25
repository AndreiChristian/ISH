import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reservations-facilities-subcategory',
  templateUrl: './reservations-facilities-subcategory.component.html',
  styleUrls: ['./reservations-facilities-subcategory.component.scss'],
})
export class ReservationsFacilitiesSubcategoryComponent implements OnInit {
  @Input() category_id: number;

  facilitiesSubcategories$: Observable<any>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.facilitiesSubcategories$ = this.http.get(
      `http://localhost:8080/api/facilities_category/${this.category_id}`
    );
  }
}
