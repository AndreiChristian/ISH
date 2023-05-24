import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  guestList$: Observable<any>;

  constructor(private guestsService: UserService) {}

  ngOnInit(): void {
    this.guestsService.getList();
    this.guestsService.list$.subscribe((data) => console.log(data));
  }
}
