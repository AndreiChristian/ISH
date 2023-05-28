import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsFacilitiesCategoryComponent } from './reservations-facilities-category.component';

describe('ReservationsFacilitiesCategoryComponent', () => {
  let component: ReservationsFacilitiesCategoryComponent;
  let fixture: ComponentFixture<ReservationsFacilitiesCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsFacilitiesCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationsFacilitiesCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
