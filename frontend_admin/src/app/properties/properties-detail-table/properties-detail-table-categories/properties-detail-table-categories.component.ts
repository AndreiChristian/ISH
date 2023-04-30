import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PropertiesService } from '../../properties.service';

@Component({
  selector: 'app-properties-detail-table-categories',
  templateUrl: './properties-detail-table-categories.component.html',
  styleUrls: ['./properties-detail-table-categories.component.scss'],
})
export class PropertiesDetailTableCategoriesComponent implements OnInit {
  displayedColumns: string[] = ['name'];
  dataSource = new MatTableDataSource<any>();

  constructor(private propertiesService: PropertiesService) {}

  ngOnInit(): void {
    this.propertiesService.data$.subscribe(
      (data) => (this.dataSource.data = data.property_facility_categories)
    );
  }
}
