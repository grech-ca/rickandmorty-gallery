import { FC, ComponentProps } from 'react';

import { Skeleton, SkeletonProps } from '@mui/material';
import { useImage } from 'react-image';

import { StyledCharacterImage } from './style';

export interface CharacterImageProps extends ComponentProps<'img'> {
  src: string;
  skeletonProps?: SkeletonProps;
}

export const CharacterImage: FC<CharacterImageProps> = ({ src, skeletonProps, ...props }) => {
  const { src: srcData, isLoading } = useImage({ srcList: src, useSuspense: false });

  if (isLoading) return <Skeleton style={props.style} {...skeletonProps} />;

  return <StyledCharacterImage src={srcData} {...props} />;
};
