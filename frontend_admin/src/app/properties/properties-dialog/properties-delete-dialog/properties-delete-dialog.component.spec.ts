import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesDeleteDialogComponent } from './properties-delete-dialog.component';

describe('PropertiesDeleteDialogComponent', () => {
  let component: PropertiesDeleteDialogComponent;
  let fixture: ComponentFixture<PropertiesDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertiesDeleteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertiesDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
