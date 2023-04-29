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

  constructor() {}

  ngOnInit(): void {
    console.log(this.facilities);
  }
}
