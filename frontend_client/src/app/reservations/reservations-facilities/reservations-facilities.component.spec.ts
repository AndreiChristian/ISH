import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsFacilitiesComponent } from './reservations-facilities.component';

describe('ReservationsFacilitiesComponent', () => {
  let component: ReservationsFacilitiesComponent;
  let fixture: ComponentFixture<ReservationsFacilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsFacilitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationsFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
