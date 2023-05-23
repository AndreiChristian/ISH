import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegionService } from '../region.service';
import { HttpService } from 'src/app/services/http.service';
import { Region } from '../region.model';

@Component({
  selector: 'post-region-dialog',
  templateUrl: 'post-region-dialog.html',
})
export class PostRegionDialog {
  newRegion: Region = {
    name: '',
    description: '',
    id: 0,
    country: '',
    state: '',
  };

  constructor(private regionService: RegionService) {}

  postRegion() {
    this.regionService.post(this.newRegion);
    this.regionService.getList();
  }
}
