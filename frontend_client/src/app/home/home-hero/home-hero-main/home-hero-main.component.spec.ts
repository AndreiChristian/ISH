import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHeroMainComponent } from './home-hero-main.component';

describe('HomeHeroMainComponent', () => {
  let component: HomeHeroMainComponent;
  let fixture: ComponentFixture<HomeHeroMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeHeroMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeHeroMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
