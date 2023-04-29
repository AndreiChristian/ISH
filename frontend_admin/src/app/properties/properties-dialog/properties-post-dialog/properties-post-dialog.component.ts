import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-properties-post-dialog',
  templateUrl: './properties-post-dialog.component.html',
  styleUrls: ['./properties-post-dialog.component.scss'],
})
export class PropertiesPostDialogComponent implements OnInit {
  property = {
    name: '',
    location: '',
    square_meters: null,
    description: '',
    long: '',
    lat: '',
    city: '',
    street: '',
    number: null,
    bathrooms: null,
    bedrooms: null,
    price: null,
    region: null,
    property_facility_categories: [],
    property_facility_subcategories: [],
    property_facility_items: [],
  };

  regions$: Observable<any>;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getList('regions/');
    this.regions$ = this.httpService.data$;
  }

  onSubmit(propertyForm: NgForm) {
    if (propertyForm.valid) {
      console.log('Form submitted', this.property);
      // Handle form submission logic here
    } else {
      console.log('Form is not valid');
    }

    this.httpService.post(this.property, 'properties/');
  }
}
