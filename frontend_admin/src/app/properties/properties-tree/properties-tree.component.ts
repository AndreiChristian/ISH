import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, Input, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { PropertiesService } from '../properties.service';

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
  @Input() facilityCategories: any[];
  @Input() facilitySubcategories: any[];
  @Input() facilityItems: any[];

  tree: any;

  treeControl = new NestedTreeControl<FoodNode>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  hasChild = (_: number, node: FoodNode) =>
    !!node.children && node.children.length > 0;

  constructor(private propertiesService: PropertiesService) {
    // this.dataSource.data = TREE_DATA;
  }

  ngOnInit(): void {
    this.dataSource.data = this.propertiesService.createTree(
      this.facilityCategories,
      this.facilitySubcategories,
      this.facilityItems
    );
  }
}
