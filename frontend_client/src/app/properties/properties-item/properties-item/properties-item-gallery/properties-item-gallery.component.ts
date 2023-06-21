import { Component, Input, OnInit } from '@angular/core';
import { propertyData } from 'src/app/properties/propertiesData/data';

@Component({
  selector: 'app-properties-item-gallery',
  templateUrl: './properties-item-gallery.component.html',
  styleUrls: ['./properties-item-gallery.component.scss'],
})
export class PropertiesItemGalleryComponent implements OnInit {
  @Input() id: string;

  property: any;

  ngOnInit(): void {
    console.log(this.id);
    this.property = propertyData.find(
      (p) => p.propertyId.toString() == this.id
    );
  }
}
