import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsFacilitiesSubcategoryComponent } from './reservations-facilities-subcategory.component';

describe('ReservationsFacilitiesSubcategoryComponent', () => {
  let component: ReservationsFacilitiesSubcategoryComponent;
  let fixture: ComponentFixture<ReservationsFacilitiesSubcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsFacilitiesSubcategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationsFacilitiesSubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
