import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostFacilityDialogComponent } from './dialogs/post-facility-dialog/post-facility-dialog.component';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.scss'],
})
export class FacilityComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(PostFacilityDialogComponent,{
      width: '70vw',
    });
  }
}
