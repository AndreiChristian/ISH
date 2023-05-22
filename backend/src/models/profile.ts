interface Profile {
  id: number;
  userName: string;
  email: string;
  passwordHash: string;
  createdAt: Date;
  updatedAt?: Date;
}
