import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, map, of, switchMap, tap } from 'rxjs';
import { ReservationsService } from '../../reservations.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reservations-facilities-category',
  templateUrl: './reservations-facilities-category.component.html',
  styleUrls: ['./reservations-facilities-category.component.scss'],
})
export class ReservationsFacilitiesCategoryComponent implements OnInit {
  @Input() facilityCategory: any;

  ngOnInit(): void {}
}
