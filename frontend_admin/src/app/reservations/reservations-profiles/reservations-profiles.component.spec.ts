import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsProfilesComponent } from './reservations-profiles.component';

describe('ReservationsProfilesComponent', () => {
  let component: ReservationsProfilesComponent;
  let fixture: ComponentFixture<ReservationsProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsProfilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationsProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
