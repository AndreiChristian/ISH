import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { MatDialog } from '@angular/material/dialog';
import { PropertiesPostDialogComponent } from './properties-dialog/properties-post-dialog/properties-post-dialog.component';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss'],
})
export class PropertiesComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(PropertiesPostDialogComponent);
  }
}
