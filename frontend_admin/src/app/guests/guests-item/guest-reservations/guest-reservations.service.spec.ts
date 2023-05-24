import { TestBed } from '@angular/core/testing';

import { GuestReservationsService } from './guest-reservations.service';

describe('GuestReservationsService', () => {
  let service: GuestReservationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuestReservationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
