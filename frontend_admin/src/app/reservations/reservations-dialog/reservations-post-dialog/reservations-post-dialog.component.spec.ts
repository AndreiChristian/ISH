import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsPostDialogComponent } from './reservations-post-dialog.component';

describe('ReservationsPostDialogComponent', () => {
  let component: ReservationsPostDialogComponent;
  let fixture: ComponentFixture<ReservationsPostDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsPostDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationsPostDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
