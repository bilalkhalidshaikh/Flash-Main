import React from 'react';
import { Text as RebassText, TextProps as RebassTextProps } from 'rebass/styled-components';

export type TextVariant =
  | 'default'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 's1'
  | 's2'
  | 's3'
  | 's4'
  | 's5'
  | 'tooltip';
export interface TextProps extends RebassTextProps {
  variant?: TextVariant;
}

export const Text: React.FC<TextProps> = ({ children, ...props }) => (
  <RebassText as="p" tx="text" {...props}>
    {children}
  </RebassText>
);

Text.displayName = 'Text';

Text.defaultProps = {
  variant: 'default',
};
