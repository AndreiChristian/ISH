import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservations-profiles',
  templateUrl: './reservations-profiles.component.html',
  styleUrls: ['./reservations-profiles.component.scss'],
})
export class ReservationsProfilesComponent implements OnInit {
  @Input() profiles: any;



  constructor(private http: HttpClient) {}

  ngOnInit() {

  }

  message: string;


}
