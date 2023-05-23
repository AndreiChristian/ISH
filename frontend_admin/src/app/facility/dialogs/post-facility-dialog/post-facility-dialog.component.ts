import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FacilityCategoriesService } from '../../facilityCategory.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {
  FacilityCategoryInterface,
  FacilityItem,
  FacilityItemInterface,
  FacilitySubcategoryInterface,
} from '../../facility.models';
import { FacilitySubcategoriesService } from '../../facilitySubcategory.service';
import { FacilityItemService } from '../../facilityItem.service';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-post-facility-dialog',
  templateUrl: './post-facility-dialog.component.html',
  styleUrls: ['./post-facility-dialog.component.scss'],
})
export class PostFacilityDialogComponent implements OnInit {
  myControl = new FormControl('');

  facilityCategories$: Observable<FacilityCategoryInterface[]>;
  facilitySubcategories: FacilitySubcategoryInterface[];

  itemLevelsOptions = [
    { value: 'IND', viewValue: 'Individual' },
    { value: 'ROM', viewValue: 'Room' },
    { value: 'PRP', viewValue: 'Property' },
  ];

  newFacilityCategory: FacilityCategoryInterface = {
    name: '',
    subcategories: [],
  };

  newFacilitySubcategory: FacilitySubcategoryInterface = {
    name: '',
    category: '',
    items: [],
  };

  newFacilityItem: FacilityItem = {
    name: '',
    subcategory: '',
    category: '',
    description: '',
    imageUrl: '',
  };

  constructor(
    private facilityCategoryService: FacilityCategoriesService,
    private facilitySubcategoriesService: FacilitySubcategoriesService,
    private facilityItemService: FacilityItemService,
    private overlay: OverlayContainer
  ) {}

  ngOnInit(): void {
    this.facilityCategoryService.getList();
    this.facilityCategories$ = this.facilityCategoryService.data$;

    this.facilitySubcategoriesService.getList();
    this.facilitySubcategoriesService.data$.subscribe(
      (data) => (this.facilitySubcategories = data)
    );

    // this.overlay.getContainerElement().classList.add('dark-mode');
  }

  postFacilityCategory() {
    this.facilityCategoryService.post(this.newFacilityCategory);
  }

  postFacilitySubcategory() {
    console.log(this.newFacilitySubcategory);
    this.facilitySubcategoriesService.post(this.newFacilitySubcategory);
  }

  postFacilityItem() {
    // console.log(this.newFacilityItem);
    this.facilityItemService.post(this.newFacilityItem);
  }
}
