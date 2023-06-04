import { Component, OnDestroy, OnInit } from '@angular/core';
import { Reservation } from '../reservations.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PropertiesService } from 'src/app/properties/properties.service';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-reservations-form',
  templateUrl: './reservations-form.component.html',
  styleUrls: ['./reservations-form.component.scss'],
})
export class ReservationsFormComponent implements OnInit, OnDestroy {
  constructor(
    private http: HttpClient,
    private router: Router,
    private propertiesService: PropertiesService,
    private authService: AuthService
  ) {}

  property$: Observable<any>;

  propertyId: number = 0;

  user: any;

  newReservation: Reservation = {
    property_id: this.propertyId,
    adults: 0,
    start_date: null,
    end_date: null,
    children: 0,
    status: 'test',
    total_price: 0,
  };

  subscription: Subscription;

  ngOnInit(): void {
    this.property$ = this.propertiesService.selectedProperty$;
    this.user = this.authService.currentUserValue[0];
    console.log(this.user);
    this.subscription = this.property$.subscribe(
      (data) => ((this.propertyId = data.id), console.log(this.propertyId))
    );
  }

  postReservation() {
    // const reservationToPost: Reservation = {
    //   ...this.newReservation,
    //   property_id: this.propertyId,
    // };

    // console.table(this.newReservation);
    // this.http
    //   .post('http://localhost:8080/api/reservations', reservationToPost)
    //   .subscribe((data) => console.log(data));

    // this.router.navigate(['reservations', 'confirmation']);

    console.table(this.newReservation);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
