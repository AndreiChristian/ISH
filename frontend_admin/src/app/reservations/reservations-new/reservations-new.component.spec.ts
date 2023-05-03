import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsNewComponent } from './reservations-new.component';

describe('ReservationsNewComponent', () => {
  let component: ReservationsNewComponent;
  let fixture: ComponentFixture<ReservationsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
