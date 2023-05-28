import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reservations-facilities-subcategory',
  templateUrl: './reservations-facilities-subcategory.component.html',
  styleUrls: ['./reservations-facilities-subcategory.component.scss'],
})
export class ReservationsFacilitiesSubcategoryComponent implements OnInit {
  constructor(private http: HttpClient) {}

  @Input() category_id: number;

  facilitiesSubcategories$: Observable<any>;

  ngOnInit(): void {
    this.facilitiesSubcategories$ = this.http.get(
      `http://localhost:8080/api/facilities_subcategory/category/${this.category_id}`
    );
  }
}
