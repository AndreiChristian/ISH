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
    password: '',
    phone_number: '0772576199',
  };

  ngOnInit(): void {
    this.userId = this.authService.currentUserValue[0].id;
    console.log(this.userId);
  }

  createPost() {
    const newProfile = { ...this.newProfile, guest_id: this.userId };
    this.http.post('', newProfile);
  }
}
