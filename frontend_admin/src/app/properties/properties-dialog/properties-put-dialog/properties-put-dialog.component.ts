import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { PropertyInterface } from '../../properties-detail/properties-detail.component';
import { PropertiesService } from '../../properties.service';

@Component({
  selector: 'app-properties-put-dialog',
  templateUrl: './properties-put-dialog.component.html',
  styleUrls: ['./properties-put-dialog.component.scss'],
})
export class PropertiesPutDialogComponent {
  property: PropertyInterface;

  regions$: Observable<any>;

  constructor(
    private http: HttpClient,
    private httpService: HttpService,
    private propertiesService: PropertiesService
  ) {}

  ngOnInit(): void {
    this.propertiesService.data$.subscribe((data) => (this.property = data));
    console.log(this.property);
    this.regions$ = this.http.get('http://127.0.0.1:8000/api/regions/');
  }

  onSubmit(propertyForm: NgForm) {
    if (propertyForm.valid) {
      console.log('Form submitted', this.property);
      this.httpService.put(this.property, `test_properties/${this.property.id}/`);
    } else {
      console.log('Form is not valid');
    }
  }
}