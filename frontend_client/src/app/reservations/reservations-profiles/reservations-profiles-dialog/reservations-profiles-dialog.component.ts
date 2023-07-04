import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { ReservationsService } from '../../reservations.service';
import { ReservationsFormService } from '../../reservations-form.service';

@Component({
  selector: 'app-reservations-profiles-dialog',
  templateUrl: './reservations-profiles-dialog.component.html',
  styleUrls: ['./reservations-profiles-dialog.component.scss'],
})
export class ReservationsProfilesDialogComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private reservationService: ReservationsService,
    private http: HttpClient,
    private reservationFormService: ReservationsFormService
  ) {}

  userId: number;

  reservationId: number;

  newProfile = {
    first_name: '',
    last_name: '',
    global: false,
  };

  ngOnInit(): void {
    this.userId = this.authService.currentUserValue[0].id;
    console.log(this.userId);

    this.reservationFormService.reservation$.subscribe(
      (data) => (this.reservationId = data[0].id)
    );
  }

  createProfile() {
    const newProfile = { ...this.newProfile, guest_id: this.userId };

    if (newProfile.global) {
      this.reservationService.postProfile(newProfile, this.userId);
    } else {
      this.http
        .post(
          `http://localhost:3000/api/reservations_profiles/${this.reservationId}`,
          newProfile
        )
        .subscribe((data) => console.log(data));

      // console.table(newProfile);
    }
  }
}
