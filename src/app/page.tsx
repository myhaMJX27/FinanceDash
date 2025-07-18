import type { JSX } from 'react';

import { AddTransaction } from '@/features/AddTransaction';
import { StyledMain } from '@/shared/ui/Main';

export default function Home(): JSX.Element {
  return (
    <StyledMain display="flex" gap="10px" justifyContent="space-between">
      <AddTransaction />
    </StyledMain>
  );
}
