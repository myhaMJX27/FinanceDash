import type { TTransactionOperation, TTransactionType } from './types';

export interface ITransaction {
  id: string;
  amount: number;
  description: string;
  date: string;
  type: TTransactionType;
  operationType: TTransactionOperation;
}
