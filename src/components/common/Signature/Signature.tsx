import { FC } from 'react';

import { Link } from '@mui/material';

import { StyledSignature } from './style';

export const Signature: FC = () => {
  return (
    <StyledSignature>
      Made by{' '}
      <Link href="https://github.com/grech-ca" target="blank">
        github.com/grech-ca
      </Link>
    </StyledSignature>
  );
};
