import { Component } from '@angular/core';
import { FacilityCategoriesService } from '../../facilityCategory.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-post-facility-dialog',
  templateUrl: './post-facility-dialog.component.html',
  styleUrls: ['./post-facility-dialog.component.scss'],
})
export class PostFacilityDialogComponent {
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];

  newFacilityCategory = {
    name: '',
    subcategories: [],
  };

  constructor(private facilityCategoryService: FacilityCategoriesService) {}

  postFacilityCategory() {
    this.facilityCategoryService.post(this.newFacilityCategory);
  }
}
