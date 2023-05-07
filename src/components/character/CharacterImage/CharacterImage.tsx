import { FC, useState, ComponentProps, ReactEventHandler, CSSProperties } from 'react';

import { Skeleton, SkeletonProps } from '@mui/material';

import { StyledCharacterImage } from './style';

export interface CharacterImageProps extends ComponentProps<'img'> {
  src?: string;
  skeletonProps?: SkeletonProps;
  isLoading?: boolean;
  wrapperStyle?: CSSProperties;
}

export const CharacterImage: FC<CharacterImageProps> = ({
  skeletonProps,
  isLoading,
  style,
  wrapperStyle,
  onLoad,
  ...props
}) => {
  const [isImageLoading, setIsImageLoading] = useState(true);

  const handleLoad: ReactEventHandler<HTMLImageElement> = e => {
    setIsImageLoading(false);
    onLoad?.(e);
  };

  return (
    <div style={{ ...style, position: 'relative', overflow: 'hidden' }}>
      <Skeleton
        variant="rectangular"
        style={{
          position: 'absolute',
          inset: 0,
          height: '100%',
          width: '100%',
          opacity: isImageLoading || isLoading ? 1 : 0,
          transition: '.3s',
        }}
        {...skeletonProps}
      />
      <StyledCharacterImage
        style={{
          ...style,
          opacity: isImageLoading || isLoading ? 0 : 1,
          transition: '.3s',
          position: 'relative',
        }}
        onLoad={handleLoad}
        {...props}
      />
    </div>
  );
};
