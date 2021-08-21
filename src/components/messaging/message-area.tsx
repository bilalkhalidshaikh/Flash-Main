/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react/display-name */
import React from 'react';
import { Box, BoxProps } from 'rebass/styled-components';
import styled from 'styled-components';

export const Message = styled(Box)`
  border-radius: 1.8rem;
  background-color: ${props =>
    props.variant === 'sent' ? props.theme.colors.primary : props.theme.colors.gray_1};
  width: fit-content;
  color: white;
  font-size: 1.7rem;
  line-height: 2.1rem;
`;
export type MessageAreaProps = BoxProps;

export const MessageArea: React.FC<MessageAreaProps> = ({ variant, ...props }) => (
  <Box tx="message" variant={variant} {...props}>
    <Message px="2rem" py="0.8rem" variant="sent">
      Test
    </Message>
  </Box>
);
