import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { FacilityCategoriesService } from '../facilityCategory.service';

@Component({
  selector: 'app-facility-category',
  templateUrl: './facility-category.component.html',
  styleUrls: ['./facility-category.component.scss'],
})
export class FacilityCategoryComponent implements OnInit {
  displayedColumns: string[] = ['name', 'subcategories', 'edit', 'delete'];
  dataSource = [];

  isLoading: boolean = true;

  constructor(
    private httpService: HttpService,
    private facilityCategoriesService: FacilityCategoriesService
  ) {}

  ngOnInit(): void {
    this.facilityCategoriesService.loading$.subscribe(
      (data) => (this.isLoading = data)
    );
    this.facilityCategoriesService.getList();
    this.facilityCategoriesService.data$.subscribe((data) => {
      this.dataSource = data;
    });
  }

  ngOnDestroy(): void {
    this.isLoading = false;
  }
}
