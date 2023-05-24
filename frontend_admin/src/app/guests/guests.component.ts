import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GuestsService } from './guests.service';

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.scss'],
})
export class GuestsComponent implements OnInit {
  guestList$: Observable<any>;

  constructor(private guestsService: GuestsService) {}

  ngOnInit(): void {
    this.guestsService.getList();
    this.guestsService.list$.subscribe((data) => console.log(data));
  }
}
