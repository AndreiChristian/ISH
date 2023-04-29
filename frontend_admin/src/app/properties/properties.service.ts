import { Injectable } from '@angular/core';

interface TreeNode {
  name: string;
  children?: TreeNode[];
}
@Injectable({
  providedIn: 'root',
})
export class PropertiesService {
  createTree(
    categories: string[],
    subcategories: string[],
    items: string[]
  ): TreeNode[] {
    const tree: TreeNode[] = [];

    for (const category of categories) {
      const categoryNode: TreeNode = {
        name: category,
        children: [],
      };

      for (const subcategory of subcategories) {
        const [subcategoryName, parentCategory] = subcategory.split('-');

        if (parentCategory === category) {
          const subcategoryNode: TreeNode = {
            name: subcategoryName,
            children: [],
          };

          for (const item of items) {
            const [parentSubcategory, itemName] = item.split('-');

            console.table({ itemName, parentSubcategory, subcategoryName });

            if (parentSubcategory === subcategoryName) {
              console.log(true);
              const itemNode: TreeNode = {
                name: itemName,
              };

              subcategoryNode.children.push(itemNode);
            }
          }

          categoryNode.children.push(subcategoryNode);
        }
      }

      tree.push(categoryNode);
    }

    return tree;
  }

  constructor() {}
}
