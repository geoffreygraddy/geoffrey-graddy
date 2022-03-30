export interface InventoryItem {
  name: string,
  serialNumber: string,
  amountPaid: number,
  datePurchased: Date,
  notes: string,
  location: string,
  isFlagged: boolean,
  isArchived: boolean
}