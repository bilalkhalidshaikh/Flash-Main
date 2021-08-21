/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { Box, BoxProps } from 'rebass/styled-components';
import { MessageThumbnail, Text } from '@flash/components';
import theme from '@flash/theme';
import { Header } from './shared-components';

export type RequestsProps = BoxProps;

const InformationMessage: React.FC = () => (
  <Box
    bg={`${theme.colors.primary + Math.floor(0.1 * 255).toString()}`}
    css={{ borderRadius: '0.8rem' }}
    my="2rem"
    p="2rem"
  >
    <Text color="dark_4" variant="s4">
      Message requests are from people outside your network. Open a request to know about who&apos;s
      messaging you. They won&apos;t know you&apos;ve seen it until you reply.{' '}
    </Text>
  </Box>
);

export const Requests: React.FC<RequestsProps> = ({ ...props }) => (
  <Box {...props} p="1rem">
    <Header chats={4} page="requests" requests={5} />
    <InformationMessage />
    <MessageThumbnail
      message="Hi Ash! Saw you had some background in CS before you transitioned to UX and was hoping to get some tips about...."
      mt="2rem"
      name="Albert Bell"
      time="Yesterday"
    />
    <MessageThumbnail
      message="Hi Ash! Saw you had some background in CS before you transitioned to UX and was hoping to get some tips about...."
      name="Ronald Mccoy"
      time="Yesterday"
    />
  </Box>
);
