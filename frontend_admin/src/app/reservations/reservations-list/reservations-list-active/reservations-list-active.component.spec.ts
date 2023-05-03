import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsListActiveComponent } from './reservations-list-active.component';

describe('ReservationsListActiveComponent', () => {
  let component: ReservationsListActiveComponent;
  let fixture: ComponentFixture<ReservationsListActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsListActiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationsListActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
