import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RegionService } from './region.service';
import { Observable } from 'rxjs';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss'],
})
export class RegionComponent implements OnInit {
  showContent: boolean = false;

  regions: any[] = [];

  regions$: Observable<any[]>;

  constructor(
    private http: HttpClient,
    private regionService: RegionService,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.regionService.getAllRegions();
    this.regions$ = this.httpService.data$;
    this.regions$.subscribe((data) => console.log(data));
  }

  toggleShowContent() {
    this.showContent = !this.showContent;
  }
}
