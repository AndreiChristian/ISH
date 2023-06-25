import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { ReservationsService } from '../../reservations.service';

@Component({
  selector: 'app-reservations-profiles-dialog',
  templateUrl: './reservations-profiles-dialog.component.html',
  styleUrls: ['./reservations-profiles-dialog.component.scss'],
})
export class ReservationsProfilesDialogComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private reservationService: ReservationsService
  ) {}

  userId: number;

  newProfile = {
    first_name: '',
    last_name: '',
  };

  ngOnInit(): void {
    this.userId = this.authService.currentUserValue[0].id;
    console.log(this.userId);
  }

  createProfile() {
    const newProfile = { ...this.newProfile, guest_id: this.userId };
    this.reservationService.postProfile(newProfile, this.userId);
  }
}
