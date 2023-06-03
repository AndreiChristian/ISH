import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHeroFacilitiesComponent } from './home-hero-facilities.component';

describe('HomeHeroFacilitiesComponent', () => {
  let component: HomeHeroFacilitiesComponent;
  let fixture: ComponentFixture<HomeHeroFacilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeHeroFacilitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeHeroFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
