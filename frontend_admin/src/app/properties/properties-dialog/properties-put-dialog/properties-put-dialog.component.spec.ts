import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesPutDialogComponent } from './properties-put-dialog.component';

describe('PropertiesPutDialogComponent', () => {
  let component: PropertiesPutDialogComponent;
  let fixture: ComponentFixture<PropertiesPutDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertiesPutDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertiesPutDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
