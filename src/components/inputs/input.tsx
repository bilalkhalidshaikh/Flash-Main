import React, { useState } from 'react';
import { Box, BoxProps, Flex, Text, TextProps } from 'rebass/styled-components';
import styled from 'styled-components';
import theme from '@flash/theme';
import { getSpaceProps, omitSpaceProps } from '../utils';

type RebassInputProps = BoxProps & React.InputHTMLAttributes<HTMLInputElement>;

export type InputVariant = 'default' | 'error';

export interface InputProps extends RebassInputProps {
  variant?: InputVariant;
  colors?: Record<string, any>;
  label?: string;
  error?: string;
  labelProps?: TextProps;
  errorProps?: TextProps;
  subtext?: string;
}

const ErrorText = styled(Text)`
  margin-left: auto;
  color: ${props => props.theme.colors.error};
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
`;

const Label = styled(Text)`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`;

const SubText = styled(Text)`
  text-align: right;
`;

export const Input: React.FC<InputProps> = React.forwardRef(
  ({ label, colors, error, subtext, labelProps, errorProps, ...props }, ref) => {
    const [state, setState] = useState<string>(props.variant || '');

    return (
      <Box
        onBlur={() => {
          setState('default');
        }}
        onFocus={() => {
          setState('focus');
        }}
        {...getSpaceProps(props)}
      >
        <Flex>
          <Label color={colors && colors[state]} {...labelProps}>
            {label || ''}
          </Label>
          <ErrorText {...errorProps}>{error || ''}</ErrorText>
        </Flex>
        <Box ref={ref} as="input" tx="inputs" {...omitSpaceProps(props)} />
        <SubText>{subtext}</SubText>
      </Box>
    );
  }
);

Input.displayName = 'Input';
Input.defaultProps = {
  variant: 'default',
  colors: {
    default: theme.colors.silverChalice,
    focus: theme.colors.primary,
    error: theme.colors.error,
  },
};
