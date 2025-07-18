import type { ITransaction } from '../../model/interafaces';
import { CMostExpensiveLength } from '../constants';

export const getExpensiveTransactions = (
  allTransactions: ITransaction[],
  newTransaction: ITransaction
): ITransaction[] => {
  const updatedTransactions = [...allTransactions, newTransaction];
  updatedTransactions.sort((a, b) => b.amount - a.amount);
  return updatedTransactions.slice(0, CMostExpensiveLength);
};
