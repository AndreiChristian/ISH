import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReservationsService } from '../../reservations.service';

@Component({
  selector: 'app-reservations-facilities-subcategory',
  templateUrl: './reservations-facilities-subcategory.component.html',
  styleUrls: ['./reservations-facilities-subcategory.component.scss'],
})
export class ReservationsFacilitiesSubcategoryComponent implements OnInit {
  @Input() category_id: number;

  facilitiesSubcategories$: Observable<any>;

  constructor(private reservationsService: ReservationsService) {}

  ngOnInit(): void {
    this.facilitiesSubcategories$ =
      this.reservationsService.getFacilitySubcategoriesByCategoryId(
        this.category_id
      );
  }
}
