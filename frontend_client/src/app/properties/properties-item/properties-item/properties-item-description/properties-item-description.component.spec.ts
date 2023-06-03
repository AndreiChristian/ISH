import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesItemDescriptionComponent } from './properties-item-description.component';

describe('PropertiesItemDescriptionComponent', () => {
  let component: PropertiesItemDescriptionComponent;
  let fixture: ComponentFixture<PropertiesItemDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertiesItemDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertiesItemDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
