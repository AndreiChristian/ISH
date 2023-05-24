import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestProfilesComponent } from './guest-profiles.component';

describe('GuestProfilesComponent', () => {
  let component: GuestProfilesComponent;
  let fixture: ComponentFixture<GuestProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestProfilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
