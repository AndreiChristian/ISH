import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsDetailComponent } from './reservations-detail.component';

describe('ReservationsDetailComponent', () => {
  let component: ReservationsDetailComponent;
  let fixture: ComponentFixture<ReservationsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
