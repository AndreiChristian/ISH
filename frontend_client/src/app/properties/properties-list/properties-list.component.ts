import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { PropertiesService, Property } from '../properties.service';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.scss'],
})
export class PropertiesListComponent implements OnInit {
  // constructor(private http: HttpClient) {}

  // properties$: Observable<any>;

  // ngOnInit(): void {
  //   this.properties$ = this.http.get(`${environment.apiUrl}/api/property`);
  //   this.properties$.subscribe((data) => console.log(data));
  // }

  constructor(private propertiesService: PropertiesService) {}

  properties$: Observable<Property[]>;

  ngOnInit(): void {
    this.propertiesService.getPropertiesList();
    this.properties$ = this.propertiesService.propertyList$;
  }
}
