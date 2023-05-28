import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, map, of, switchMap, tap } from 'rxjs';
import { ReservationsService } from '../../reservations.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reservations-facilities-category',
  templateUrl: './reservations-facilities-category.component.html',
  styleUrls: ['./reservations-facilities-category.component.scss'],
})
export class ReservationsFacilitiesCategoryComponent
  implements OnInit, OnDestroy
{
  facilitiesCategory$: Observable<any>;

  id: number;
  subscription: Subscription;

  categoriesArray: any[];

  constructor(
    private reservationsService: ReservationsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reservationsService.facilityCategories$;

    this.subscription = this.route.params.subscribe((data) => {
      if (data) {
        this.id = data['id'];
      }
      this.facilitiesCategory$ =
        this.reservationsService.facilityCategories$.pipe(
          map((array) => array.find((item) => item.id == this.id))
        );
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  navigateToNextCategory() {}

  navigateToPreviousCategory() {}
}
