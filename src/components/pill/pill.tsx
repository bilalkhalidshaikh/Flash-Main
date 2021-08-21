import React from 'react';
import { Box, BoxProps } from 'rebass/styled-components';

export type PillVariant = 'default' | 'outlined' | 'secondary';

export interface PillProps extends BoxProps {
  variant?: PillVariant;
}

export const Pill: React.FC<PillProps> = ({ children, ...props }) => (
  <Box tx="pill" {...props}>
    {children}
  </Box>
);

Pill.displayName = 'Pill';

Pill.defaultProps = {
  variant: 'default',
};
