import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

export interface PropertyInterface {
  id?: number;
  name: string;
  location: string;
  property_facility_categories: string[];
  property_facility_subcategories: string[];
  property_facility_items: string[];
  region: string;
  square_meteres: string;
}
@Component({
  selector: 'app-properties-detail',
  templateUrl: './properties-detail.component.html',
  styleUrls: ['./properties-detail.component.scss'],
})
export class PropertiesDetailComponent implements OnInit {
  param: string;

  property$: Observable<PropertyInterface>;

  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.param = params['id']));
    this.httpService.getOne(`properties/${this.param}`);
    this.httpService.data$.subscribe((data) => console.log(data));
    this.property$ = this.httpService.data$;
  }
}
