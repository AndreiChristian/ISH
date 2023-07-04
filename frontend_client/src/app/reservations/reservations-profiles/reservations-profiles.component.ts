import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReservationsService } from '../reservations.service';
import { AuthService } from 'src/app/auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ReservationsProfilesDialogComponent } from './reservations-profiles-dialog/reservations-profiles-dialog.component';

@Component({
  selector: 'app-reservations-profiles',
  templateUrl: './reservations-profiles.component.html',
  styleUrls: ['./reservations-profiles.component.scss'],
})
export class ReservationsProfilesComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private reservationsService: ReservationsService,
    private authService: AuthService,
    private dialog: MatDialog
  ) {}

  selectedProfile$: Observable<any>;

  userId: any;

  profiles$: Observable<any>;

  ngOnInit(): void {
    this.userId = this.authService.currentUserValue[0].id;

    this.reservationsService.getProfilesByGuestId(this.userId);
    this.profiles$ = this.reservationsService.profiles$;
    this.selectedProfile$ = this.reservationsService.selectedProfile$;

    this.selectedProfile$.subscribe((data) => console.log(data));
  }

  openDialog() {
    this.dialog.open(ReservationsProfilesDialogComponent, {
      width: '70vw',
    });
  }

  selectProfile(profile: any) {
    this.reservationsService.selectProfile(profile);
  }
}
