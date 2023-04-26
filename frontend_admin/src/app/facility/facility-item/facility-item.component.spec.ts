import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityItemComponent } from './facility-item.component';

describe('FacilityItemComponent', () => {
  let component: FacilityItemComponent;
  let fixture: ComponentFixture<FacilityItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacilityItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
