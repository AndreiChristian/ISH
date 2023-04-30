import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { PropertiesService } from '../../properties.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PropertyInterface } from '../../properties-detail/properties-detail.component';

@Component({
  selector: 'app-properties-detail-table-categories',
  templateUrl: './properties-detail-table-categories.component.html',
  styleUrls: ['./properties-detail-table-categories.component.scss'],
})
export class PropertiesDetailTableCategoriesComponent implements OnInit {
  selectedValue: any;

  categories$: Observable<any>;

  displayedColumns: string[] = ['name', 'delete'];
  dataSource = new MatTableDataSource<any>();

  property: PropertyInterface;

  @ViewChild(MatTable) table: MatTable<any>;

  constructor(
    private propertiesService: PropertiesService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.propertiesService.data$.subscribe(
      (data) => (this.dataSource.data = data.property_facility_categories)
    );
    this.categories$ = this.http.get(
      'http://127.0.0.1:8000/api/facility_categories/'
    );

    this.property = this.propertiesService.property;
  }

  selectCategory() {
    this.dataSource.data.push({
      available: true,
      facility_category: {
        id: this.selectedValue.id,
        name: this.selectedValue.name,
      },
      id: 0,
    });

    this.table.renderRows();

    this.propertiesService.put(
      this.property.id,
      this.propertiesService.prepareProperty(this.property)
    );
  }
}
