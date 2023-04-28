import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { FacilitySubcategoriesService } from '../facilitySubcategory.service';

@Component({
  selector: 'app-facility-subcategory',
  templateUrl: './facility-subcategory.component.html',
  styleUrls: ['./facility-subcategory.component.scss'],
})
export class FacilitySubcategoryComponent {
  displayedColumns: string[] = ['name', 'category', 'items', 'edit', 'delete'];
  dataSource = [];

  isLoading: boolean = true;

  constructor(
    private facilitySubcategoriesService: FacilitySubcategoriesService
  ) {}

  ngOnInit(): void {
    this.facilitySubcategoriesService.loading$.subscribe(
      (data) => (this.isLoading = data)
    );
    this.facilitySubcategoriesService.getList();
    this.facilitySubcategoriesService.data$.subscribe((data) => {
      this.dataSource = data;
    });
  }

  ngOnDestroy(): void {
    this.isLoading = false;
  }
}
