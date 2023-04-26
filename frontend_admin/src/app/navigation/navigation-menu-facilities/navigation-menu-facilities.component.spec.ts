import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationMenuFacilitiesComponent } from './navigation-menu-facilities.component';

describe('NavigationMenuFacilitiesComponent', () => {
  let component: NavigationMenuFacilitiesComponent;
  let fixture: ComponentFixture<NavigationMenuFacilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationMenuFacilitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationMenuFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
