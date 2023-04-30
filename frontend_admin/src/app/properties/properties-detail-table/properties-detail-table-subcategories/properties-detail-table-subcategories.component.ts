import { Component, ViewChild } from '@angular/core';
import { PropertiesService } from '../../properties.service';
import { Observable } from 'rxjs';
import { PropertyInterface } from '../../properties-detail/properties-detail.component';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-properties-detail-table-subcategories',
  templateUrl: './properties-detail-table-subcategories.component.html',
  styleUrls: ['./properties-detail-table-subcategories.component.scss'],
})
export class PropertiesDetailTableSubcategoriesComponent {
  selectedValue: any;

  subcategories$ = new Observable<any>();

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
      (data) => (this.dataSource.data = data.property_facility_subcategories)
    );
    this.property = this.propertiesService.property;
    // this.dataSource.data = this.property.property_facility_categories;
    this.subcategories$ = this.http.get(
      'http://127.0.0.1:8000/api/facility_subcategories/'
    );

    for (let subcategory of this.property.property_facility_subcategories) {
      console.log({
        name: subcategory.facility_subcategory.name,
        id: subcategory.facility_subcategory.id,
      });
    }
  }

  selectSubcategory() {
    this.dataSource.data.push({
      available: true,
      facility_subcategory: {
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

  deleteSubcategory(id: number) {
    // console.log('The id is', id);

    // console.table({
    //   property: this.property.property_facility_subcategories.length,
    //   table: this.dataSource.data.length,
    // });

    // this.dataSource.data = this.dataSource.data.filter((subcategory) => {
    //   return subcategory.facility_subcategory.id != id;
    //   // console.log(subcategory.facility_subcategory.id !== id)
    // });

    this.property.property_facility_subcategories =
      this.property.property_facility_subcategories.filter((subcategory) => {
        console.log(subcategory.facility_subcategory.id !== id);
        return subcategory.facility_subcategory.id != id;
      });

    this.dataSource.data = this.property.property_facility_subcategories;

    this.table.renderRows();

    // console.table({
    //   property: this.property.property_facility_subcategories.length,
    //   table: this.dataSource.data.length,
    // });

    console.log(
      this.property.property_facility_subcategories.map(
        (s) => s.facility_subcategory.id
      )
    );

    this.propertiesService.put(
      this.property.id,
      this.propertiesService.prepareProperty(this.property)
    );
  }
}
