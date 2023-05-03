import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsListPastComponent } from './reservations-list-past.component';

describe('ReservationsListPastComponent', () => {
  let component: ReservationsListPastComponent;
  let fixture: ComponentFixture<ReservationsListPastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsListPastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationsListPastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
