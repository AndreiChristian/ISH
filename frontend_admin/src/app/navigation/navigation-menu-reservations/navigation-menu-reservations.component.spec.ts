import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationMenuReservationsComponent } from './navigation-menu-reservations.component';

describe('NavigationMenuReservationsComponent', () => {
  let component: NavigationMenuReservationsComponent;
  let fixture: ComponentFixture<NavigationMenuReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationMenuReservationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationMenuReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
