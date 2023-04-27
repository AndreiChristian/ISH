import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { RegionService } from '../region.service';

@Component({
  selector: 'app-region-item',
  templateUrl: './region-item.component.html',
  styleUrls: ['./region-item.component.scss'],
})
export class RegionItemComponent implements OnInit {
  @Input() region: any;
  @Input() index: number = 0;

  showContent: boolean = false;

  constructor(private regionService: RegionService) {}

  toggleShowContent() {
    this.showContent = !this.showContent;
  }

  ngOnInit(): void {
    this.index++;
  }

  deleteItem(id: number) {
    this.regionService.deleteRegion(id);
    this.regionService.getAllRegions();
  }
}
