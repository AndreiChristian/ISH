import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestsTableComponent } from './guests-table.component';

describe('GuestsTableComponent', () => {
  let component: GuestsTableComponent;
  let fixture: ComponentFixture<GuestsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
