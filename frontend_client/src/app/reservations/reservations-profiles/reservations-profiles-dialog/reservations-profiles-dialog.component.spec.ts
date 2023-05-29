import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsProfilesDialogComponent } from './reservations-profiles-dialog.component';

describe('ReservationsProfilesDialogComponent', () => {
  let component: ReservationsProfilesDialogComponent;
  let fixture: ComponentFixture<ReservationsProfilesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsProfilesDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationsProfilesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
