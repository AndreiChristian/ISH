import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegionService } from '../region.service';

@Component({
  selector: 'put-region-dialog',
  templateUrl: 'put-region-dialog.html',
})
export class PutRegionDialog {
  constructor(
    @Inject(MAT_DIALOG_DATA) public region: any,
    private regionService: RegionService
  ) {}

  // updatedRegion = this.region;

  putRegion(id: number) {
    console.log;
    this.regionService.putRegion(this.region.id, this.region);
    this.regionService.getAllRegions();
  }
}
