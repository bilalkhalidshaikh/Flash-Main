import React from 'react';
import { Box, Flex, BoxProps } from 'rebass/styled-components';
import styled from 'styled-components';
import { Image, Text, Pill } from '@flash/components';
import Message from '@flash/images/message.svg';
import Elipses from '@flash/images/elipses.svg';

export type Profile1Props = BoxProps;

const IconButton = styled(Flex)`
  width: 4.2rem;
  height: 4.2rem;
  border-radius: 18rem;
  box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.07);
  justify-content: center;
  align-items: center;
`;

const TextBackground = styled(Text)`
  background: #f9f9f9;
  border-radius: 1.4rem;
  padding: 0.6rem 1.7rem;
`;

const Section: React.FC<BoxProps> = ({ title, children, ...props }) => (
  <Box mt="1.4rem" {...props}>
    {title ? (
      <Text color="dark_1" ml="0.6rem" variant="s5">
        {title}
      </Text>
    ) : (
      ''
    )}
    <Flex mt="0.6rem">{children}</Flex>
  </Box>
);

export const Profile1: React.FC<Profile1Props> = ({ ...props }) => (
  <Box {...props}>
    <Flex>
      <Image src="https://source.unsplash.com/random/200x200?sig=1" variant="profile" />
      <Box ml="1.8rem">
        <Text color="dark_4" variant="h2">
          ALISTAIR COWELL
        </Text>
        <Text color="dark_1" variant="s1">
          Design Lead @ YistCoin
        </Text>
        <Flex mt="0.9rem">
          <IconButton mr="1rem">
            <Message />
          </IconButton>
          <IconButton>
            <Elipses />
          </IconButton>
        </Flex>
      </Box>
    </Flex>

    <Section title="ABOUT ME">
      <TextBackground color="dark_1" variant="s4">
        blah shAclick on someAJsnsjkslsnmx skkasjlsk blah shAHSIH OSAAJsnsjkslsnmx skkasjlsk{' '}
      </TextBackground>
    </Section>

    <Section title="ALISTAIR WANTS TO LEARN">
      <Pill variant="outlined">network</Pill>
      <Pill ml="0.8rem">mentor</Pill>
      <Pill ml="0.8rem">learn</Pill>
    </Section>

    <Section>
      <TextBackground color="dark_4" variant="s2" width="100%">
        You can help them in{' '}
        <Text as="span" color="primary" variant="tooltip">
          Crypto
        </Text>
        <br />
        They can offer you help with{' '}
        <Text as="span" color="primary" variant="tooltip">
          UX Design
        </Text>
      </TextBackground>
    </Section>

    <Section title="ALISTAIR WANTS TO LEARN">
      <Pill variant="outlined">crypto</Pill>
      <Pill ml="0.8rem" variant="outlined">
        blockchain
      </Pill>
      <Pill ml="0.8rem">startups</Pill>
    </Section>

    <Section title="ALISTAIR KNOWS ABOUT">
      <Pill variant="outlined">ux design</Pill>
      <Pill ml="0.8rem" variant="outlined">
        web design
      </Pill>
      <Pill ml="0.8rem">photoshop</Pill>
    </Section>
  </Box>
);

Profile1.displayName = 'Profile3';

Profile1.defaultProps = {};
