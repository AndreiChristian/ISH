import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestsItemComponent } from './guests-item.component';

describe('GuestsItemComponent', () => {
  let component: GuestsItemComponent;
  let fixture: ComponentFixture<GuestsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestsItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
