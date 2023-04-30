import { Component } from '@angular/core';
import { PropertiesService } from '../../properties.service';
import { Observable } from 'rxjs';
import { PropertyInterface } from '../../properties-detail/properties-detail.component';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-properties-detail-table-subcategories',
  templateUrl: './properties-detail-table-subcategories.component.html',
  styleUrls: ['./properties-detail-table-subcategories.component.scss'],
})
export class PropertiesDetailTableSubcategoriesComponent {
  selectedCategory?: string;

  property$: Observable<PropertyInterface>;

  constructor(private propertiesService: PropertiesService) {
    this.property$ = this.propertiesService.data$;
  }

  displayedColumns: string[] = ['name','delete'];
  dataSource = new MatTableDataSource<any>();

  ngOnInit(): void {
    this.propertiesService.data$.subscribe(
      (data) => (this.dataSource.data = data.property_facility_subcategories)
    );
  }
}
