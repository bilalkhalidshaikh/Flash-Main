/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { Box, BoxProps } from 'rebass/styled-components';
import { MessageThumbnail } from '@flash/components';
import { Header } from './shared-components';

export type AllChatsProps = BoxProps;

export const AllChats: React.FC<AllChatsProps> = ({ ...props }) => (
  <Box {...props} p="1rem">
    <Header chats={4} page="all-chats" requests={5} />
    <MessageThumbnail
      message="Pls take a look at the images."
      mt="2rem"
      name="Darlene Steward"
      selected
      time="18.31"
    />
    <MessageThumbnail
      message="I‘m happy this career has such grea..."
      name="Albert Bell"
      time="Yesterday"
    />
    <MessageThumbnail
      message="Yes, that’s gonna work, hopefully. "
      name="Lee Williamson"
      time="06:12"
    />
    <MessageThumbnail message="Thanks dude 😉" name="Ronald Mccoy" time="Yesterday" />
  </Box>
);
