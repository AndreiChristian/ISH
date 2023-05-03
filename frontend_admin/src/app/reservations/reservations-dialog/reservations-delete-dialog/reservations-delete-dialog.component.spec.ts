import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsDeleteDialogComponent } from './reservations-delete-dialog.component';

describe('ReservationsDeleteDialogComponent', () => {
  let component: ReservationsDeleteDialogComponent;
  let fixture: ComponentFixture<ReservationsDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsDeleteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationsDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
