import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsListUpcomingComponent } from './reservations-list-upcoming.component';

describe('ReservationsListUpcomingComponent', () => {
  let component: ReservationsListUpcomingComponent;
  let fixture: ComponentFixture<ReservationsListUpcomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsListUpcomingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationsListUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
