import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsFacilitiesItemComponent } from './reservations-facilities-item.component';

describe('ReservationsFacilitiesItemComponent', () => {
  let component: ReservationsFacilitiesItemComponent;
  let fixture: ComponentFixture<ReservationsFacilitiesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsFacilitiesItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationsFacilitiesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
