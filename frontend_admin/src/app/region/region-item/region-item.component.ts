import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { RegionService } from '../region.service';
import { MatDialog } from '@angular/material/dialog';
import { PutRegionDialog } from '../region-dialogs/put-region-dialog.component';
import { DeleteRegionDialog } from '../region-dialogs/delete-region-dialog.component';

@Component({
  selector: 'app-region-item',
  templateUrl: './region-item.component.html',
  styleUrls: ['./region-item.component.scss'],
})
export class RegionItemComponent implements OnInit {
  @Input() region: any;
  @Input() index: number = 0;

  showContent: boolean = false;

  constructor(private regionService: RegionService, public dialog: MatDialog) {}

  toggleShowContent() {
    this.showContent = !this.showContent;
  }

  ngOnInit(): void {
    this.index++;
  }



  openPutDialog() {
    this.dialog.open(PutRegionDialog);
  }

  openDeleteDialog() {
    this.dialog.open(DeleteRegionDialog, {
      data: this.region,
    });
  }
}
