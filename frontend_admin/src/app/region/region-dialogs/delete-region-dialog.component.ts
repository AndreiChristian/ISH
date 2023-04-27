import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegionService } from '../region.service';

@Component({
  selector: 'delete-region-dialog',
  templateUrl: 'delete-region-dialog.html',
})
export class DeleteRegionDialog {
  constructor(
    @Inject(MAT_DIALOG_DATA) public region: any,
    private regionService: RegionService
  ) {}

  deleteRegion(id: number) {
    this.regionService.deleteRegion(id);
    this.regionService.getAllRegions();
  }
}
