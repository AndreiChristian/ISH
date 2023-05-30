import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-reservations-profiles-dialog',
  templateUrl: './reservations-profiles-dialog.component.html',
  styleUrls: ['./reservations-profiles-dialog.component.scss'],
})
export class ReservationsProfilesDialogComponent implements OnInit {
  constructor(private authService: AuthService, private http: HttpClient) {}

  userId: number;

  newProfile = {
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
  };

  ngOnInit(): void {
    this.userId = this.authService.currentUserValue[0].id;
    console.log(this.userId);
  }

  createProfile() {
    const newProfile = { ...this.newProfile, guest_id: this.userId };
    this.http
      .post('http://localhost:8080/api/profiles', newProfile)
      .subscribe((data) => console.log(data));
    // console.table(newProfile);
  }
}
