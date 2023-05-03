import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsPostProfileDialogComponent } from './reservations-post-profile-dialog.component';

describe('ReservationsPostProfileDialogComponent', () => {
  let component: ReservationsPostProfileDialogComponent;
  let fixture: ComponentFixture<ReservationsPostProfileDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsPostProfileDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationsPostProfileDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
