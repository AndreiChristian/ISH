import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityCategoryComponent } from './facility-category.component';

describe('FacilityCategoryComponent', () => {
  let component: FacilityCategoryComponent;
  let fixture: ComponentFixture<FacilityCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacilityCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
