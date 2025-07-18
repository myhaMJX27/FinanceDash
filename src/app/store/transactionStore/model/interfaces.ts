import type { IBalance } from '@/entities/Balance';
import type {
  ITransaction,
  TTransactionsByCategory,
} from '@/entities/Transaction';

export interface IFinance extends IFinanceData {
  addTransaction: (transaction: ITransaction) => void;
}

export interface IFinanceData {
  balance: number;
  transactions: ITransaction[];
  transactionByType: TTransactionsByCategory;
  transactionExpensive: ITransaction[];
  balanceHistory: IBalance[];
}
