import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { CTransactionStoreName } from './lib/constants';
import { getInitialState } from './lib/utils/getInitialState';
import { updateStateAddTransaction } from './lib/utils/updateStateAddTranscation';
import type { IFinance } from './model/interfaces';

export const useTransactionsStore = create<IFinance>()(
  persist(
    (set) => ({
      ...getInitialState(),
      addTransaction: (transaction) =>
        set((state) => updateStateAddTransaction(state, transaction)),
    }),
    { name: CTransactionStoreName }
  )
);
