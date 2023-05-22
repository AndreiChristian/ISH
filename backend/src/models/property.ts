interface Property {
  id: number;
  name: string;
  addressId: number;
  regionId: number;
  description?: string;
  price: number;
  rating?: number;
  createdAt: Date;
  updatedAt?: Date;
}
