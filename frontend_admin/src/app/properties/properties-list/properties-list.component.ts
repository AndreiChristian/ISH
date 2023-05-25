import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { PropertiesService } from '../properties.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.scss'],
})
export class PropertiesListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['id', 'name', 'region', 'navigate'];
  dataSource = [];

  subscription: Subscription;

  constructor(
    private router: Router,
    private propertiesService: PropertiesService
  ) {}

  ngOnInit(): void {
    this.propertiesService.getList();
    this.subscription = this.propertiesService.data$.subscribe(
      (data) => (this.dataSource = data)
    );
  }

  navigate(id: number) {
    this.router.navigate(['/properties', id]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
