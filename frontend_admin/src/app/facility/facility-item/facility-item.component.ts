import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-facility-item',
  templateUrl: './facility-item.component.html',
  styleUrls: ['./facility-item.component.scss'],
})
export class FacilityItemComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [
    'name',
    'price',
    'adult_only',
    'level',
    'edit',
    'delete',
  ];
  dataSource = [];

  isLoading: boolean = true;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.loading$.subscribe(
      (data: boolean) => (this.isLoading = data)
    );
    this.httpService.getList('facility_items');
    this.httpService.data$.subscribe((data) => {
      (this.dataSource = data), console.log(data);
    });
  }

  ngOnDestroy(): void {
    this.isLoading = false;
  }

  deleteItem(id: number) {
    this.httpService.delete(`facility_items/${id}`);
  }
}
