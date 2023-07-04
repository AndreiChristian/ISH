import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ReservationsService } from '../reservations.service';
import { AuthService } from 'src/app/auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ReservationsProfilesDialogComponent } from './reservations-profiles-dialog/reservations-profiles-dialog.component';
import { ReservationsFormService } from '../reservations-form.service';
import { Reservation } from '../reservations.component';
import {
  PropertiesService,
  Property,
} from 'src/app/properties/properties.service';
import { ReservationsProfilesListDialogComponent } from '../reservations-profiles-list-dialog/reservations-profiles-list-dialog.component';

@Component({
  selector: 'app-reservations-profiles',
  templateUrl: './reservations-profiles.component.html',
  styleUrls: ['./reservations-profiles.component.scss'],
})
export class ReservationsProfilesComponent implements OnInit, OnDestroy {
  constructor(
    private reservationsService: ReservationsService,
    private authService: AuthService,
    private dialog: MatDialog,
    private reservationForm: ReservationsFormService,
    private propertiesService: PropertiesService
  ) {}

  selectedProfile$: Observable<any>;

  userId: any;

  profiles$: Observable<any>;

  reservation$: Observable<Reservation>;

  selectedProperty$: Observable<Property>;

  reservationSubscription: Subscription;
  // reservationId:number;

  isDialogOpened = false;

  ngOnInit(): void {
    this.selectedProperty$ = this.propertiesService.selectedProperty$;

    this.userId = this.authService.currentUserValue[0].id;

    this.reservationsService.getProfilesByGuestId(this.userId);
    this.profiles$ = this.reservationsService.profiles$;

    this.reservationSubscription = this.profiles$.subscribe((data) => {
      if (data && !this.isDialogOpened) {
        this.isDialogOpened = true;
        this.dialog.open(ReservationsProfilesListDialogComponent, {
          width: '70vw',

          hasBackdrop: true,
          data: {
            userId: this.userId,
          },
        });
      }
    });

    this.selectedProfile$ = this.reservationsService.selectedProfile$;

    this.selectedProfile$.subscribe((data) => console.log(data));
    this.reservation$ = this.reservationForm.reservation$;

    this.reservation$.subscribe((data) => console.log(data));
  }

  ngOnDestroy(): void {
    this.reservationSubscription && this.reservationSubscription.unsubscribe();
  }

  openCreateNewProfileDialog() {
    this.dialog.open(ReservationsProfilesDialogComponent, {
      width: '70vw',
      height: '70vw',
      hasBackdrop: true,
    });
  }

  selectProfile(profile: any) {
    this.reservationsService.selectProfile(profile);
  }
}
