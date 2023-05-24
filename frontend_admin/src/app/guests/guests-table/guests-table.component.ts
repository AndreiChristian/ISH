import { Component, OnInit } from '@angular/core';
import { GuestsService } from '../guests.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guests-table',
  templateUrl: './guests-table.component.html',
  styleUrls: ['./guests-table.component.scss'],
})
export class GuestsTableComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'first_name',
    'last_name',
    'email',
    'navigate',
  ];
  dataSource: any[] = [];

  constructor(private guestsService: GuestsService, private router: Router) {}

  ngOnInit(): void {
    this.guestsService.list$.subscribe((data) => {
      this.dataSource = data;
    });
  }

  navigate(id: number) {
    this.router.navigate(['guests', id]);
  }
}
