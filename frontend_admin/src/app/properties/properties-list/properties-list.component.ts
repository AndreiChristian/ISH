import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.scss'],
})
export class PropertiesListComponent {
  displayedColumns: string[] = ['name', 'location', 'region', 'square_meters'];
  dataSource = [];

  constructor(private httpService: HttpService, private router: Router) {}

  ngOnInit(): void {
    this.httpService.getList('properties');
    this.httpService.data$.subscribe((data) => (this.dataSource = data));
  }

  navigate(id: number) {
    this.router.navigate(['/properties', id]);
  }
}
