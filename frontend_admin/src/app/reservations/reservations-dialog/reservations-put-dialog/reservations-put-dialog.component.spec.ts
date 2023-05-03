import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsPutDialogComponent } from './reservations-put-dialog.component';

describe('ReservationsPutDialogComponent', () => {
  let component: ReservationsPutDialogComponent;
  let fixture: ComponentFixture<ReservationsPutDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsPutDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationsPutDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
