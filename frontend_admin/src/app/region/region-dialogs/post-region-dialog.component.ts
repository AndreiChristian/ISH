import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegionService } from '../region.service';
import { HttpService } from 'src/app/services/http.service';
import { RegionInterface } from '../region.model';

@Component({
  selector: 'post-region-dialog',
  templateUrl: 'post-region-dialog.html',
})
export class PostRegionDialog {
  newRegion: RegionInterface = {
    name: '',
    description: '',
    properties: [],
    staff_members: [],
    managers: [],
  };

  constructor(private regionService: RegionService) {}

  postRegion() {
    console.log(this.newRegion);
    this.regionService.postRegion(this.newRegion);
  }
}
