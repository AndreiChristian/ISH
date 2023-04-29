import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesDetailTableComponent } from './properties-detail-table.component';

describe('PropertiesDetailTableComponent', () => {
  let component: PropertiesDetailTableComponent;
  let fixture: ComponentFixture<PropertiesDetailTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertiesDetailTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertiesDetailTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
