import type { IFinanceData } from '../../model/interfaces';

export const getInitialState = (): IFinanceData => ({
  balance: 0,
  transactions: [],
  transactionByType: {
    food: [],
    shopping: [],
    housing: [],
    transport: [],
    car: [],
    entertainment: [],
    another: [],
    communication: [],
  },
  transactionExpensive: [],
  balanceHistory: [],
});
