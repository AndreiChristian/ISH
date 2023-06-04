import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { PropertiesService, Property } from '../properties.service';

@Component({
  selector: 'app-properties-item',
  templateUrl: './properties-item.component.html',
  styleUrls: ['./properties-item.component.scss'],
})
export class PropertiesItemComponent implements OnInit, OnDestroy {
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private propertyService: PropertiesService
  ) {}

  id: string;

  property$: Observable<Property>;

  routeSubscription: Subscription;

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(
      (data) => (this.id = data['id'])
    );

    this.property$ = this.http.get<Property>(
      `http://localhost:3000/api/property/${this.id}`
    );

    this.property$.subscribe((data) => console.log(data));
  }

  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

  bookProperty() {
    console.log('bookProperty has been called');
    let selectedProperty: any;
    const subscription = this.property$.subscribe((data) => {
      console.log(data);
      selectedProperty = data;
      this.propertyService.selectProperty(selectedProperty);
      subscription.unsubscribe();
    });
    this.router.navigate(['reservations']);
  }

  getBackground(url: string) {
    return `linear-gradient(to bottom, rgba(0, 0, 0, 0.101) 40%, rgba(0, 0, 0, 0.664) 70%,black), url(${url})`;
  }
}
