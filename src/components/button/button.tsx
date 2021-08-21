import React from 'react';
import { Button as RebassButton, ButtonProps as RebassButtonProps } from 'rebass/styled-components';
import styled from 'styled-components';
import { size, SizeProps } from '../utils';

export type ButtonVariant = 'default' | 'primary' | 'secondary' | 'disabled';

export interface ButtonProps extends SizeProps, Omit<RebassButtonProps, 'size'> {
  variant?: ButtonVariant;
}

const StyledButton = styled(RebassButton)`
  ${size('buttons.sizes')}
`;

export const Button: React.FC<ButtonProps> = ({ children, ...props }: ButtonProps) => (
  <StyledButton {...props}>{children}</StyledButton>
);

Button.displayName = 'Button';

Button.defaultProps = {
  size: 'medium',
  variant: 'default',
};
