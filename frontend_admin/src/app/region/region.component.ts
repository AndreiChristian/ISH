import { Component, OnInit } from '@angular/core';
import { RegionService } from './region.service';
import { Observable } from 'rxjs';
import { PostRegionDialog } from './region-dialogs/post-region-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Region } from './region.model';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss'],
})
export class RegionComponent implements OnInit {
  showContent: boolean = false;

  regions$: Observable<Region | Region[]>;

  constructor(public dialog: MatDialog, private regionService: RegionService) {}

  ngOnInit(): void {
    this.regionService.getList();

    this.regions$ = this.regionService.data$;
  }

  toggleShowContent() {
    this.showContent = !this.showContent;
  }

  openPostDialog() {
    this.dialog.open(PostRegionDialog);
  }
}
