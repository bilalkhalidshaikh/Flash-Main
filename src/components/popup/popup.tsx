import React from 'react';
import { Box, BoxProps } from 'rebass/styled-components';

export type PopupVariant = 'default';

export interface PopupProps extends BoxProps {
  variant?: PopupVariant;
}

export const Popup: React.FC<PopupProps> = ({ children, ...props }) => (
  <Box tx="popup" {...props}>
    {children}
  </Box>
);

Popup.displayName = 'Popup';

Popup.defaultProps = {
  variant: 'default',
};
