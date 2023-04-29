interface TreeNode {
  name: string;
  children?: TreeNode[];
}

function createTree(
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
          const [itemName, parentSubcategory] = item.split('-');

          if (parentSubcategory === subcategoryName) {
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

const propertyFacilityCategories = [
  "Food",
  "Activities",
  "Mental health",
  "Drinks",
];
const propertyFacilitySubcategories = [
  "Champagne-Drinks",
  "Red Wine-Drinks",
  "Tequila-Drinks",
];
const propertyFacilityItems = [
  "Champagne-Moet",
  "Champagne-Dom Ruinart",
  "Red Wine-Romanée-Conti",
  "Champagne-Krystal",
];

const tree = createTree(
  propertyFacilityCategories,
  propertyFacilitySubcategories,
  propertyFacilityItems
);

console.log(tree);
