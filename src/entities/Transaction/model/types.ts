import type { ITransaction } from './interafaces';

export type TTransactionType =
  | 'food'
  | 'shopping'
  | 'housing'
  | 'transport'
  | 'car'
  | 'entertainment'
  | 'communication'
  | 'another';

export type TTransactionOperation = 'income' | 'expense';

export type TTransactionOperationMap = {
  [K in TTransactionOperation]: K;
};

export type TTransactionsByCategory = Record<TTransactionType, ITransaction[]>;
