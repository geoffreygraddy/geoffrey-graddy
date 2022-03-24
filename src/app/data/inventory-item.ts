export interface InventoryItem {
  name: string,
  location: string,
  serialNumber: string,
  amountPaid: number,
  notes: string,
  isFlagged: boolean,
  isArchived: boolean
}