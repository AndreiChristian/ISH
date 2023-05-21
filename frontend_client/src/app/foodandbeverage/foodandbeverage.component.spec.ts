import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodandbeverageComponent } from './foodandbeverage.component';

describe('FoodandbeverageComponent', () => {
  let component: FoodandbeverageComponent;
  let fixture: ComponentFixture<FoodandbeverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodandbeverageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodandbeverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
