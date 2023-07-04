import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { PropertiesService, Property } from '../properties.service';
import { environment } from 'src/environments/environment.prod';

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
  propertySubscription: Subscription;

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(
      (data) => (this.id = data['id'])
    );

    this.propertyService.getIndividualProperty(+this.id);

    this.property$ = this.propertyService.propertyIndividual$;

    // this.property$.subscribe((data) => console.log(data));
  }

  ngOnDestroy(): void {
    this.routeSubscription && this.routeSubscription.unsubscribe();
    this.propertySubscription && this.propertySubscription.unsubscribe();
  }

  selectProperty() {
    this.propertySubscription = this.property$.subscribe((data) =>
      this.propertyService.selectProperty(data)
    );

    this.router.navigate(['reservations']);
  }

  getBackground(url: string) {
    return `linear-gradient(to bottom, rgba(0, 0, 0, 0.101) 40%, rgba(0, 0, 0, 0.664) 70%,black), url(${url}) `;
  }
}
