import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reservations-post-dialog',
  templateUrl: './reservations-post-dialog.component.html',
  styleUrls: ['./reservations-post-dialog.component.scss']
})
export class ReservationsPostDialogComponent {
  formData = {
    profiles: [],
    adults: null,
    children: null,
    start_date: null,
    end_date: null
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form submitted:', this.formData);
    } else {
      console.log('Form is invalid.');
    }
  }
}
