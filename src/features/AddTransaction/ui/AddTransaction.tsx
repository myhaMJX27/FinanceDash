import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import type { JSX } from 'react';

import { StyledDiv } from '@/shared/ui/Div';
import Icon from '@/shared/ui/Icon/ui/Icon';

export const AddTransaction = (): JSX.Element => {
  return (
    <StyledDiv>
      <Icon icon={faCirclePlus} type="dark" iconsize="40px" />
    </StyledDiv>
  );
};
