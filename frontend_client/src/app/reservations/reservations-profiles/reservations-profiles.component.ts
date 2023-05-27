import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReservationsService } from '../reservations.service';

@Component({
  selector: 'app-reservations-profiles',
  templateUrl: './reservations-profiles.component.html',
  styleUrls: ['./reservations-profiles.component.scss'],
})
export class ReservationsProfilesComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private reservationsService: ReservationsService
  ) {}

  profiles$: Observable<any>;

  ngOnInit(): void {
    this.profiles$ = this.http.get(
      'http://localhost:8080/api/guests_profiles/6'
    );
    this.profiles$.subscribe((data) => console.log(data));
  }

  selectProfile(profile: any) {
    this.reservationsService.selectProfile(profile);
  }
}
