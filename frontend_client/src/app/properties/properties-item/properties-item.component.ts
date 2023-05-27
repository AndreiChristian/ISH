import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { PropertiesService } from '../properties.service';

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

  property$: Observable<any>;

  routeSubscription: Subscription;

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(
      (data) => (this.id = data['id'])
    );

    this.property$ = this.http.get(
      `http://localhost:8080/api/property/${this.id}`
    );
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
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
}
