import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { PropertiesService } from '../properties.service';

interface PropertyInterface {
  id?: number;
  name: string;
  location: string;
  square_meters: number;
  region: string; // Assuming Region has an integer id
  description: string | null;
  long: string | null;
  lat: string | null;
  city: string | null;
  street: string | null;
  number: number | null;
  price: number | null;
  bathrooms: number | null;
  bedrooms: number | null;
  property_facility_categories: any[];
  property_facility_subcategories?: string[];
  property_facility_items?: string[];
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
    private propertiesService: PropertiesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.param = params['id']));
    this.propertiesService.getOne(+this.param);
    this.property$ = this.propertiesService.data$;
  }
}
