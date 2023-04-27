import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-facility-subcategory',
  templateUrl: './facility-subcategory.component.html',
  styleUrls: ['./facility-subcategory.component.scss'],
})
export class FacilitySubcategoryComponent {
  displayedColumns: string[] = ['name', 'items', 'edit', 'delete'];
  dataSource = [];

  isLoading: boolean = true;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.loading$.subscribe(
      (data: boolean) => (this.isLoading = data)
    );
    this.httpService.getList('facility_subcategories');
    this.httpService.data$.subscribe((data) => {
      (this.dataSource = data), console.log(data);
    });
  }
}
