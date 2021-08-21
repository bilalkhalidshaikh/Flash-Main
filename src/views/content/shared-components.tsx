/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable radix */
import React from 'react';
import { Box, BoxProps, Flex, FlexProps, Button as RebassButton } from 'rebass/styled-components';
import { Text } from '@flash/components';
import styled from 'styled-components';
import { ChevronLeft, ChevronLeftSm, FilledStar } from '@flash/images';

const IconButton = styled(RebassButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.primary};
  border-radius: 50%;
`;

export const Header: React.FC<BoxProps & { title: string; featured?: boolean }> = ({
  title,
  featured,
  ...props
}) => (
  <Flex alignItems="center" css={{ position: 'relative' }} height="4rem" width="100%" {...props}>
    <IconButton css={{ position: 'absolute' }} height="4rem" p="0" width="4rem">
      <ChevronLeft />
    </IconButton>
    <Text color="primary" textAlign="center" variant="h2" width="100%">
      {title}
    </Text>
    <Box css={{ position: 'absolute', right: 0 }}>{featured ? <FilledStar /> : ''}</Box>
  </Flex>
);

export const BackButton: React.FC<FlexProps> = ({ ...props }) => (
  <Flex justifyContent="center" {...props}>
    <IconButton height="2.4rem" p="0" width="2.4rem">
      <ChevronLeftSm />
    </IconButton>
    <Text
      color="primary"
      css={{ textDecorationLine: 'underline' }}
      fontSize="1.4rem"
      lineHeight="2.2rem"
      ml="0.9rem"
    >
      BACK
    </Text>
  </Flex>
);
