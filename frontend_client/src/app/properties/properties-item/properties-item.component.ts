import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-properties-item',
  templateUrl: './properties-item.component.html',
  styleUrls: ['./properties-item.component.scss'],
})
export class PropertiesItemComponent implements OnInit, OnDestroy {
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

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
}
