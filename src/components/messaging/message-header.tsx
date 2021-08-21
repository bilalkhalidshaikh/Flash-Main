import React from 'react';
import { Flex, FlexProps, Button as RebassButton } from 'rebass/styled-components';
import styled from 'styled-components';
import { ChevronRightMd, VideoCall, Back } from '@flash/images';
import { Image, Text } from '..';

const Button = styled(RebassButton)`
  background: primary;
  height: 2.4rem;
  width: 2.4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 0.1rem;
`;

const HeaderContainer = styled(Flex)`
  background: white;
  border-radius: 8px;
  color: ${props => props.theme.colors.primary};
  padding: 1.2rem;
  align-items: center;
`;

export interface MessageHeaderProps extends FlexProps {
  numberOfMessages?: number;
  name: string;
  message: string;
  time: string;
}

export const MessageHeader: React.FC<MessageHeaderProps> = ({ ...props }) => (
  <HeaderContainer {...props}>
    <Back />
    <Image
      ml="2rem"
      mr="1.3rem"
      size="3.6rem"
      src="https://source.unsplash.com/random/200x200?sig=1"
      variant="circle"
    />
    <Text color="dark_4" variant="h4">
      Martha Craig
    </Text>
    <Button ml="1rem" mr="auto" p="0">
      <ChevronRightMd />
    </Button>
    <VideoCall />
  </HeaderContainer>
);

MessageHeader.defaultProps = {
  numberOfMessages: 0,
};
