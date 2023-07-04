import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsProfilesListDialogComponent } from './reservations-profiles-list-dialog.component';

describe('ReservationsProfilesListDialogComponent', () => {
  let component: ReservationsProfilesListDialogComponent;
  let fixture: ComponentFixture<ReservationsProfilesListDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsProfilesListDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationsProfilesListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
