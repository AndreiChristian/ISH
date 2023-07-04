import { Component, Inject, OnInit } from '@angular/core';
import { ReservationsService } from '../reservations.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Dialog } from '@angular/cdk/dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reservations-profiles-list-dialog',
  templateUrl: './reservations-profiles-list-dialog.component.html',
  styleUrls: ['./reservations-profiles-list-dialog.component.scss'],
})
export class ReservationsProfilesListDialogComponent implements OnInit {
  profiles$: Observable<any[]>;

  constructor(
    private reservationService: ReservationsService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.reservationService.getProfilesByGuestId(this.data.userId);
    this.profiles$ = this.reservationService.profiles$;

    this.profiles$.subscribe((data) => console.log(data));
  }
}
