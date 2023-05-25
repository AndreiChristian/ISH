import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsConfigureComponent } from './reservations-configure.component';

describe('ReservationsConfigureComponent', () => {
  let component: ReservationsConfigureComponent;
  let fixture: ComponentFixture<ReservationsConfigureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsConfigureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationsConfigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
