import { TestBed } from '@angular/core/testing';

import { ReservationProfilesService } from './reservation-profiles.service';

describe('ReservationProfilesService', () => {
  let service: ReservationProfilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationProfilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
