import { Component, OnDestroy, OnInit } from '@angular/core';
import { Reservation } from '../reservations.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PropertiesService } from 'src/app/properties/properties.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-reservations-form',
  templateUrl: './reservations-form.component.html',
  styleUrls: ['./reservations-form.component.scss'],
})
export class ReservationsFormComponent implements OnInit, OnDestroy {
  constructor(
    private http: HttpClient,
    private router: Router,
    private propertiesService: PropertiesService
  ) {}

  property$: Observable<any>;

  propertyId: number = 0;

  newReservation: Reservation = {
    property_id: this.propertyId,
    adults: 0,
    start_date: new Date(),
    end_date: new Date(),
    kids: 0,
    status: 'test',
    total_price: 0,
  };

  subscription: Subscription;

  ngOnInit(): void {
    this.property$ = this.propertiesService.selectedProperty$;
    this.subscription = this.property$.subscribe(
      (data) => (this.propertyId = data)
    );
  }

  postReservation() {
    console.table(this.newReservation);
    this.http
      .post('http://localhost:8080/api/reservations', this.newReservation)
      .subscribe((data) => console.log(data));

    this.router.navigate(['reservations', 'confirmation']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
