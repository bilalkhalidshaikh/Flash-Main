import React from 'react';
import { FlexProps, Flex, Link, Image } from 'rebass/styled-components';
import styled from 'styled-components';
import { Text } from '@flash/components';
import emailSent from '@flash/images/email-sent.png';

export type NotificationProps = FlexProps;

const Container = styled(Flex)`
  flex-direction: column;
  align-items: center;
  width: 30rem;
  margin: 0 auto;
`;

export const Notification = () => (
  <Flex alignItems="center" height="100%">
    <Container>
      <Text mb="1.7rem" variant="h1">
        Hello, Esther!
      </Text>

      <Text textAlign="center" variant="h3">
        Please check your email for the link to{' '}
        <Link color="primary" href="/reset-password">
          reset your password!
        </Link>
      </Text>

      <Image mt="7rem" src={(emailSent as unknown) as string} />
    </Container>
  </Flex>
);
