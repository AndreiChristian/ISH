import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.scss'],
})
export class PropertiesListComponent {
  constructor(private http: HttpClient) {}

  properties$: Observable<any>;

  ngOnInit(): void {
    this.properties$ = this.http.get(`${environment.apiUrl}/api/property`);
    this.properties$.subscribe((data) => console.log(data));
  }
}
