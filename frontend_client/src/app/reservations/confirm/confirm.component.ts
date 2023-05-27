import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
})
export class ConfirmComponent {
  constructor(private router: Router) {}

  configure() {
    this.router.navigate(['reservations', 'configure']);
  }
}
