interface Reservation {
  id: number;
  propertyId: number;
  // guestId: number;
  startDate: Date;
  endDate: Date;
  adults: number;
  kids: number;
  status: string;
  totalPrice: number;
}
