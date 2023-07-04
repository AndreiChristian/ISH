import { TestBed } from '@angular/core/testing';

import { ReservationsFormService } from './reservations-form.service';

describe('ReservationsFormService', () => {
  let service: ReservationsFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationsFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
