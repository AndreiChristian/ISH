interface PropertyFacility {
  propertyId: number;
  facilityId: number;
  available: boolean;
  quantity: number;
  notes?: string;
  createdAt: Date;
  updatedAt?: Date;
}
