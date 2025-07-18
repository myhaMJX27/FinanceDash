import type { ITransaction } from '@/entities/Transaction';
import {
  CTransactionOperation,
  getExpensiveTransactions,
} from '@/entities/Transaction';

import type { IFinance, IFinanceData } from '../../model/interfaces';

export const updateStateAddTransaction = (
  state: IFinance,
  transaction: ITransaction
): IFinanceData => {
  const newBalance =
    transaction.operationType === CTransactionOperation.income
      ? state.balance + transaction.amount
      : state.balance - transaction.amount;

  const newBalanceRecord = {
    balance: newBalance,
    date: transaction.date,
  };

  const baseUpdate = {
    balance: newBalance,
    transactions: [...state.transactions, transaction],
    balanceHistory: [...state.balanceHistory, newBalanceRecord],
  };

  if (transaction.operationType === CTransactionOperation.income) {
    return { ...state, ...baseUpdate };
  }

  return {
    ...baseUpdate,
    transactionByType: {
      ...state.transactionByType,
      [transaction.type]: [
        ...state.transactionByType[transaction.type],
        transaction,
      ],
    },
    transactionExpensive: getExpensiveTransactions(
      state.transactionExpensive,
      transaction
    ),
  };
};
