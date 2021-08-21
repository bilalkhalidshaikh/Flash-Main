import React from 'react';
import { Image as RebassImage, ImageProps as RebassImageProps } from 'rebass/styled-components';

export type ImageVariant = 'default' | 'profile' | 'circle';

export interface ImageProps extends RebassImageProps {
  variant?: ImageVariant;
  size?: string;
  borderRadius?: string;
}

export const Image: React.FC<ImageProps> = ({ size, ...props }) => (
  <RebassImage
    css={{ borderRadius: props.variant === 'circle' && size ? size : props.borderRadius }}
    height={size || props.height}
    tx="image"
    width={size || props.width}
    {...props}
  />
);

Image.displayName = 'Image';

Image.defaultProps = {
  variant: 'default',
};
