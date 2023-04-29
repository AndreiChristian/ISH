import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesDetailTableCategoriesComponent } from './properties-detail-table-categories.component';

describe('PropertiesDetailTableCategoriesComponent', () => {
  let component: PropertiesDetailTableCategoriesComponent;
  let fixture: ComponentFixture<PropertiesDetailTableCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertiesDetailTableCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertiesDetailTableCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
