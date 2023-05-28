import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsDrawerComponent } from './reservations-drawer.component';

describe('ReservationsDrawerComponent', () => {
  let component: ReservationsDrawerComponent;
  let fixture: ComponentFixture<ReservationsDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsDrawerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationsDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
