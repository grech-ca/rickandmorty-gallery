import { FC, PropsWithChildren } from 'react';

import { useLocation } from 'react-router-dom';
import { NavigateBefore } from '@mui/icons-material';

import { GoBackIcon, GoBackText, StyledGoBack } from './style';

export interface GoBackProps extends PropsWithChildren {
  fallbackPath: string;
}

export const GoBack: FC<GoBackProps> = ({ children, fallbackPath }) => {
  const location = useLocation();
  const canGoBack = location.state as { canGoBack: true };

  return (
    <StyledGoBack to={(canGoBack ? -1 : fallbackPath) as unknown as string}>
      <GoBackIcon as={NavigateBefore} />
      <GoBackText>{children}</GoBackText>
    </StyledGoBack>
  );
};
