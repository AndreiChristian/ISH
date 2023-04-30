import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { PropertiesService } from '../../properties.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  @ViewChild(MatTable) table: MatTable<any>;

  constructor(
    private propertiesService: PropertiesService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.propertiesService.data$.subscribe(
      (data) => (this.dataSource.data = data.property_facility_categories)
    );
    // console.log(this.dataSource.data[0])
    this.categories$ = this.http.get(
      'http://127.0.0.1:8000/api/facility_categories/'
    );
  }

  selectCategory() {
    // console.log(this.selectedValue);
    this.dataSource.data.push({
      available: true,
      facility_category: {
        id: this.selectedValue.id,
        name: this.selectedValue.name,
      },
      id: 0,
    });
    this.table.renderRows();
    console.log(this.dataSource.data);
  }
}
