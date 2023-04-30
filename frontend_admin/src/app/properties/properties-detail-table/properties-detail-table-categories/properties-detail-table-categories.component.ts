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
  displayedColumns: string[] = ['select', 'name'];
  dataSource = new MatTableDataSource<any>();
  selection = new SelectionModel<any>(true, []);

  constructor(private propertiesService: PropertiesService) {}

  ngOnInit(): void {
    this.propertiesService.data$.subscribe(
      (data) => (this.dataSource.data = data.property_facility_categories)
    );
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }
}
