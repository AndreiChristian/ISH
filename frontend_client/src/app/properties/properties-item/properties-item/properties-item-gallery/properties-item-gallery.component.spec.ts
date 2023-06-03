import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesItemGalleryComponent } from './properties-item-gallery.component';

describe('PropertiesItemGalleryComponent', () => {
  let component: PropertiesItemGalleryComponent;
  let fixture: ComponentFixture<PropertiesItemGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertiesItemGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertiesItemGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
