import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesDetailTableItemComponent } from './properties-detail-table-item.component';

describe('PropertiesDetailTableItemComponent', () => {
  let component: PropertiesDetailTableItemComponent;
  let fixture: ComponentFixture<PropertiesDetailTableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertiesDetailTableItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertiesDetailTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
