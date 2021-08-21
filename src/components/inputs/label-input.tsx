import React from 'react';
import { Box, BoxProps } from 'rebass/styled-components';
import { Input, InputProps } from '.';
import { Text, TextProps } from '..';

export interface LabelInputProps extends BoxProps {
  labelProps?: TextProps;
  inputProps?: InputProps;
  labelPosition: string;
}

export const LabelInput: React.FC<LabelInputProps> = React.forwardRef(
  ({ inputProps, labelProps, labelPosition, ...props }, ref) => (
    <Box {...props}>
      {labelPosition === 'top' ? <Text {...labelProps} /> : ''}
      <Input ref={ref} {...inputProps} />
      {labelPosition === 'bottom' ? <Text {...labelProps} /> : ''}
    </Box>
  )
);

LabelInput.displayName = 'LabelInput';
