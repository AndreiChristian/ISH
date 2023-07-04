import { Component, Input, OnInit } from '@angular/core';
import { ReservationsService } from '../reservations.service';
import { Observable } from 'rxjs';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-reservations-drawer',
  templateUrl: './reservations-drawer.component.html',
  styleUrls: ['./reservations-drawer.component.scss'],
})
export class ReservationsDrawerComponent implements OnInit {
  constructor(private reservationsService: ReservationsService) {}

  @Input() drawer:MatDrawer

  closeDrawer(){

    this.drawer.close()

  }

 ngOnInit(): void {

 }
}
