export interface FacilityCategoryInterface {
  id?: number;
  name: string;
  subcategories: string[];
}

export interface FacilitySubcategoryInterface {
  id?: number;
  name: string;
  category: string;
  items: string[];
}

export interface FacilityItemInterface {
  id?: number;
  name: string;
  price: number;
  adult_only: boolean;
  level: string;
  subcategory: string;
}
export interface FacilityItem {
  id?: number;
  name: string;
  subcategory: string;
  category: string;
  description: string;
  imageUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
