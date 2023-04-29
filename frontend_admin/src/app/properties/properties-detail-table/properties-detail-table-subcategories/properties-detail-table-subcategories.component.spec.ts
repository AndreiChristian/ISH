import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesDetailTableSubcategoriesComponent } from './properties-detail-table-subcategories.component';

describe('PropertiesDetailTableSubcategoriesComponent', () => {
  let component: PropertiesDetailTableSubcategoriesComponent;
  let fixture: ComponentFixture<PropertiesDetailTableSubcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertiesDetailTableSubcategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertiesDetailTableSubcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
