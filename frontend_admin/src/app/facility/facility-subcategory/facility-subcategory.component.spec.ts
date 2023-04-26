import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitySubcategoryComponent } from './facility-subcategory.component';

describe('FacilitySubcategoryComponent', () => {
  let component: FacilitySubcategoryComponent;
  let fixture: ComponentFixture<FacilitySubcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacilitySubcategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilitySubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
