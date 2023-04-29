import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, Input, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { PropertiesService } from '../properties.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Fruit loops' }],
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
      },
      {
        name: 'Orange',
        children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
      },
    ],
  },
];

@Component({
  selector: 'app-properties-tree',
  templateUrl: './properties-tree.component.html',
  styleUrls: ['./properties-tree.component.scss'],
})
export class PropertiesTreeComponent implements OnInit {
  @Input() facilities: any = 'waiting for the data';

  openCategories: any[] = [];
  openSubCategories: any[] = [];

  toggleCategory(category: any) {
    const index = this.openCategories.indexOf(category);
    if (index >= 0) {
      this.openCategories.splice(index, 1);
    } else {
      this.openCategories.push(category);
    }
  }

  toggleSubCategory(subcategory: any) {
    const index = this.openSubCategories.indexOf(subcategory);
    if (index >= 0) {
      this.openSubCategories.splice(index, 1);
    } else {
      this.openSubCategories.push(subcategory);
    }
  }

  constructor() {}

  ngOnInit(): void {
    console.log(this.facilities);
  }
}
