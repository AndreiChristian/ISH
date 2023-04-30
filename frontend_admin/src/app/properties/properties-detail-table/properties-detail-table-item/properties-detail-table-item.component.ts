import { Component, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { PropertyInterface } from '../../properties-detail/properties-detail.component';
import { PropertiesService } from '../../properties.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-properties-detail-table-item',
  templateUrl: './properties-detail-table-item.component.html',
  styleUrls: ['./properties-detail-table-item.component.scss']
})
export class PropertiesDetailTableItemComponent {
  selectedValue: any;

  items$ = new Observable<any>();

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
      (data) => (this.dataSource.data = data.property_facility_items)
      // data => console.log(data.property_facility_items)
    );
    console.log()
    this.property = this.propertiesService.property;
    this.items$ = this.http.get(
      'http://127.0.0.1:8000/api/facility_items/'
    );
  }

  selectItem() {
    this.dataSource.data.push({
      available: true,
      facility_item: {
       ...this.selectedValue
      },
      id: 0,
    });

    this.table.renderRows();

    this.propertiesService.put(
      this.property.id,
      this.propertiesService.prepareProperty(this.property)
    );
  }

  deleteItem(id: number) {
    this.property.property_facility_items =
      this.property.property_facility_items.filter((subcategory) => {
        console.log(subcategory.facility_item.id !== id);
        return subcategory.facility_item.id != id;
      });

    this.dataSource.data = this.property.property_facility_items;

    this.table.renderRows();

    this.propertiesService.put(
      this.property.id,
      this.propertiesService.prepareProperty(this.property)
    );
  }
}
