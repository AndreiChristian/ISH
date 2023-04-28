import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { FacilityItemService } from '../facilityItem.service';

@Component({
  selector: 'app-facility-item',
  templateUrl: './facility-item.component.html',
  styleUrls: ['./facility-item.component.scss'],
})
export class FacilityItemComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [
    'name',
    'subcategory',
    'price',
    'adult_only',
    'level',
    'edit',
    'delete',
  ];
  dataSource = [];

  isLoading: boolean = true;

  constructor(private facilityItemsService: FacilityItemService) {}

  ngOnInit(): void {
    this.facilityItemsService.loading$.subscribe(
      (data) => (this.isLoading = data)
    );
    this.facilityItemsService.getList();
    this.facilityItemsService.data$.subscribe((data) => {
      this.dataSource = data;
    });
  }

  ngOnDestroy(): void {
    this.isLoading = false;
  }

  deleteItem(id: number) {
    this.facilityItemsService.delete(id);
  }
}
