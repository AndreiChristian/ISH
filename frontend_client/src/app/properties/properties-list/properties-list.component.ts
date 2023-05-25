import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.scss'],
})
export class PropertiesListComponent {
  constructor(private http: HttpClient) {}

  properties$: Observable<any>;

  ngOnInit(): void {
    this.properties$ = this.http.get('http://localhost:8080/api/property');
  }
}
