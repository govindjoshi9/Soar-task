export type TransactionDataType = { day: string; deposit: number; withdraw: number }[];

export const transactionData: TransactionDataType = [
  { day: 'Sat', deposit: 480, withdraw: 250 },
  { day: 'Sun', deposit: 332, withdraw: 132 },
  { day: 'Mon', deposit: 321, withdraw: 271 },
  { day: 'Tue', deposit: 480, withdraw: 370 },
  { day: 'Wed', deposit: 160, withdraw: 250 },
  { day: 'Thu', deposit: 390, withdraw: 250 },
  { day: 'Fri', deposit: 400, withdraw: 320 },
];
