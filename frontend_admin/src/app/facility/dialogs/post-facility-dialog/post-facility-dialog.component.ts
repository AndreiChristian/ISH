import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FacilityCategoriesService } from '../../facilityCategory.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {
  FacilityCategoryInterface,
  FacilityItemInterface,
  FacilitySubcategoryInterface,
} from '../../facility.models';
import { FacilitySubcategoriesService } from '../../facilitySubcategory.service';
import { FacilityItemService } from '../../facilityItem.service';

@Component({
  selector: 'app-post-facility-dialog',
  templateUrl: './post-facility-dialog.component.html',
  styleUrls: ['./post-facility-dialog.component.scss'],
})
export class PostFacilityDialogComponent implements OnInit {
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];

  facilityCategories$: Observable<any>;
  facilitySubcategories$: Observable<FacilitySubcategoriesService[]>;

  newFacilityCategory: FacilityCategoryInterface = {
    name: '',
    subcategories: [],
  };

  newFacilitySubcategory: FacilitySubcategoryInterface = {
    name: '',
    category: '',
    items: [],
  };

  newFacilityItem: FacilityItemInterface = {
    name: '',
    subcategory: '',
    price: 0,
    adult_only: false,
    level: '',
  };

  constructor(
    private facilityCategoryService: FacilityCategoriesService,
    private facilitySubcategoriesService: FacilitySubcategoriesService,
    private facilityItemService: FacilityItemService
  ) {}

  ngOnInit(): void {
    this.facilityCategoryService.getList();
    this.facilityCategories$ = this.facilityCategoryService.data$;
    this.facilitySubcategoriesService.getList();
    this.facilitySubcategories$ = this.facilitySubcategoriesService.data$;
    this.facilitySubcategories$.subscribe((data) => console.log(data));
  }

  postFacilityCategory() {
    this.facilityCategoryService.post(this.newFacilityCategory);
  }

  postFacilitySubcategory() {
    console.log(this.newFacilitySubcategory);
    this.facilitySubcategoriesService.post(this.newFacilitySubcategory);
  }

  postFacilityItem() {
    console.log(this.newFacilityItem);
    // this.facilityItemService.post(this.newFacilityItem);
  }
}
