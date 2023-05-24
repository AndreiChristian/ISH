import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GuestsProfilesService } from './guest-profiles.service';

@Component({
  selector: 'app-guest-profiles',
  templateUrl: './guest-profiles.component.html',
  styleUrls: ['./guest-profiles.component.scss'],
})
export class GuestProfilesComponent {
  displayedColumns: string[] = [
    'id',
    'first_name',
    'last_name',
    'email',
    'navigate',
  ];
  dataSource: any[] = [];

  @Input() guestId: number;

  constructor(
    private guestsProfilesService: GuestsProfilesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.guestsProfilesService.getList(this.guestId.toString());
    this.guestsProfilesService.list$.subscribe((data) => {
      this.dataSource = data;
    });
  }

  navigate(id: number) {
    this.router.navigate(['guests', id]);
  }
}
