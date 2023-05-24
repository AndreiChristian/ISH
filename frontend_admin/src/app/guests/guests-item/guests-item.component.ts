import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { GuestsService } from '../guests.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-guests-item',
  templateUrl: './guests-item.component.html',
  styleUrls: ['./guests-item.component.scss'],
})
export class GuestsItemComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private guestsService: GuestsService
  ) {}

  id: number;

  guest$: Observable<any>;

  ngOnInit(): void {
    this.route.params.subscribe((data) => (this.id = +data['id']));
    this.guestsService.getOne('/' + this.id.toString());
    this.guest$ = this.guestsService.data$;
    this.guest$.subscribe((data) => console.log(data));
  }
}
