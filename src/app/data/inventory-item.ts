export interface InventoryItem {
  name: string,
  inventoryId: number,
  serialNumber: string,
  amountPaid: number,
  datePurchased: Date,
  notes: string,
  location: string,
  isFlagged: boolean,
  isArchived: boolean
}