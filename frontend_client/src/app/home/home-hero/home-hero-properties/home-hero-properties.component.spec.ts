import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHeroPropertiesComponent } from './home-hero-properties.component';

describe('HomeHeroPropertiesComponent', () => {
  let component: HomeHeroPropertiesComponent;
  let fixture: ComponentFixture<HomeHeroPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeHeroPropertiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeHeroPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
