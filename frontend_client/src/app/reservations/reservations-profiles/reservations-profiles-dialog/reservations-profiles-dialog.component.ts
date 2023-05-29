import { Component } from '@angular/core';

@Component({
  selector: 'app-reservations-profiles-dialog',
  templateUrl: './reservations-profiles-dialog.component.html',
  styleUrls: ['./reservations-profiles-dialog.component.scss']
})
export class ReservationsProfilesDialogComponent {

  newProfile = {
    first_name:"",
    last_name:"",
    email:"",
    password:"",
  }

}
