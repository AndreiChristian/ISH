import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { PropertiesService } from '../properties.service';
import { MatDialog } from '@angular/material/dialog';
import { PropertiesPutDialogComponent } from '../properties-dialog/properties-put-dialog/properties-put-dialog.component';

export interface PropertyInterface {
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
  property_facility_subcategories?: any[];
  property_facility_items?: any[];
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
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.param = params['id']));
    this.propertiesService.getOne(+this.param);
    this.property$ = this.propertiesService.data$;
  }

  openDialog() {
    this.dialog.open(PropertiesPutDialogComponent);
  }
}
