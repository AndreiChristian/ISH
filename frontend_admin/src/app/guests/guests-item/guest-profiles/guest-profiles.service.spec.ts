import { TestBed } from '@angular/core/testing';

import { GuestProfilesService } from './guest-profiles.service';

describe('GuestProfilesService', () => {
  let service: GuestProfilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuestProfilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
