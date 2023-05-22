interface Message {
  id: number;
  chatId: number;
  senderId: number;
  senderType: string;
  content: string;
  createdAt: Date;
  updatedAt?: Date;
}
