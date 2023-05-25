import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesItemComponent } from './properties-item.component';

describe('PropertiesItemComponent', () => {
  let component: PropertiesItemComponent;
  let fixture: ComponentFixture<PropertiesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertiesItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertiesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
