interface Review {
  id: number;
  guestId: number;
  propertyId: number;
  reservationId: number;
  rating: number;
  comments?: string;
  createdAt: Date;
  updatedAt?: Date;
}
