import React from 'react';
import { Box, BoxProps } from 'rebass/styled-components';
import { Profile1, Profile2, Profile3 } from './index';

export type FullProfileProps = BoxProps;

export const FullProfile: React.FC<FullProfileProps> = ({ ...props }) => (
  <Box {...props}>
    <Profile1 p="1.8rem" />
    <Profile2 p="1.8rem" />
    <Profile3 p="1.8rem" />
  </Box>
);

FullProfile.displayName = 'FullProfilePage';

FullProfile.defaultProps = {};
