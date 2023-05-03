import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reservations-new',
  templateUrl: './reservations-new.component.html',
  styleUrls: ['./reservations-new.component.scss'],
})
export class ReservationsNewComponent {
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
