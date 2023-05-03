import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reservations-post-dialog',
  templateUrl: './reservations-post-dialog.component.html',
  styleUrls: ['./reservations-post-dialog.component.scss'],
})
export class ReservationsPostDialogComponent implements OnInit {
  formData = {
    profiles: [],
    adults: null,
    children: null,
    start_date: null,
    end_date: null,
    property: '',
  };

  properties$: Observable<any>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.properties$ = this.http.get('http://127.0.0.1:8000/api/properties/');
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form submitted:', this.formData);
    } else {
      console.log('Form is invalid.');
    }
  }
}
