import React from 'react';
import { Box, Flex, FlexProps } from 'rebass/styled-components';
import styled from 'styled-components';
import { Image, Text } from '..';

const MessageContainer = styled(Flex)`
  background: white;
  border-radius: 8px;
  color: ${props => props.theme.colors.primary};
  padding: 1.2rem;
`;

const NotificationCounter = styled(Flex)`
  background: ${props => props.theme.colors.primary};
  border-radius: 5rem;
  width: 2.4rem;
  height: 2.4rem;
  align-items: center;
  justify-content: center;
`;

export interface MessageThumbnailProps extends FlexProps {
  numberOfMessages?: number;
  name: string;
  message: string;
  time: string;
}

export const MessageThumbnail: React.FC<MessageThumbnailProps> = ({
  numberOfMessages,
  name,
  message,
  time,
  ...props
}) => (
  <MessageContainer {...props}>
    <Image src="https://source.unsplash.com/random/200x200?sig=1" variant="circle" />
    <Box ml="1.6rem">
      <Text color="dark_4" variant="s4">
        {name}
      </Text>
      <Text color="dark_1" fontWeight="300" maxWidth={['15rem', '100%']} variant="s4">
        {message}
      </Text>
    </Box>
    <Flex alignItems="center" flexDirection="column" ml="auto">
      <Text color="dark_4" fontSize="1.2rem" lineHeight="1.5rem" mb="0.5rem">
        {time}
      </Text>
      {numberOfMessages ? (
        <NotificationCounter>
          <Text color="white" mr="0.1rem" variant="s4">
            {numberOfMessages}
          </Text>
        </NotificationCounter>
      ) : (
        ''
      )}
    </Flex>
  </MessageContainer>
);

MessageThumbnail.defaultProps = {
  numberOfMessages: 0,
};
