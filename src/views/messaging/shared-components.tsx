/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable radix */
import React from 'react';
import { Box, BoxProps, Flex } from 'rebass/styled-components';
import { Text } from '@flash/components';
import theme from '@flash/theme';

export const PillButton: React.FC<BoxProps & { selected?: boolean }> = ({
  selected,
  children,
  ...props
}) => (
  <Box
    bg="color"
    css={{
      border: `1px solid ${selected ? theme.colors.primary : theme.colors.gray_3}`,
      borderRadius: '0.4rem',
      boxShadow: '0px 4px 33px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
    }}
    p="0.4rem 0.8rem"
    {...props}
  >
    <Text color={`${selected ? 'primary' : 'gray_3'}`} variant="s4">
      {children}
    </Text>
  </Box>
);

export const Header: React.FC<
  BoxProps & { chats: number; requests: number; page: 'requests' | 'all-chats' }
> = ({ chats, requests, page, ...props }) => (
  <Box {...props}>
    <Text variant="s1">⚡ CHATS</Text>
    <Flex mt="2.3rem">
      <PillButton ml="1rem" selected={page === 'all-chats'}>
        All chats ({chats})
      </PillButton>
      <PillButton ml="2.4rem" selected={page === 'requests'}>
        Requests ({requests})
      </PillButton>
    </Flex>
  </Box>
);
