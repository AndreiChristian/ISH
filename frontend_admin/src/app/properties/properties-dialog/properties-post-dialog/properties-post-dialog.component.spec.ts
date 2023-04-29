import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesPostDialogComponent } from './properties-post-dialog.component';

describe('PropertiesPostDialogComponent', () => {
  let component: PropertiesPostDialogComponent;
  let fixture: ComponentFixture<PropertiesPostDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertiesPostDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertiesPostDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
