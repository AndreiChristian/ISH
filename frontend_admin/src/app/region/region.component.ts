import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss'],
})
export class RegionComponent implements OnInit {
  showContent: boolean = false;

  regions: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<any[]>('http://127.0.0.1:8000/api/regions/')
      .subscribe((data) => {
        console.log(data);
        this.regions = data;
      });
  }

  toggleShowContent() {
    this.showContent = !this.showContent;
  }
}
