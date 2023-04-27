import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-region-item',
  templateUrl: './region-item.component.html',
  styleUrls: ['./region-item.component.scss'],
})
export class RegionItemComponent implements OnInit {
  @Input() region: any;
  @Input() index: number = 0;

  showContent: boolean = false;

  constructor(private http: HttpClient) {}

  toggleShowContent() {
    this.showContent = !this.showContent;
  }

  ngOnInit(): void {
    this.index++;
  }

  deleteItem(id: number) {
    console.log(
      `deleted item number ${id} and made a request to "http://127.0.0.1:8000/api/regions/${id}/"`
    );
    this.http
      .delete(`http://127.0.0.1:8000/api/regions/${id}/`)
      .subscribe((data) => console.log(data));
  }
}
