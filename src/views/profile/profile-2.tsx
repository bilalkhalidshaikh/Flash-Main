import React from 'react';
import { Box, Flex, Button as RebassButton, BoxProps } from 'rebass/styled-components';
import styled from 'styled-components';
import ChevronRight from '@flash/images/chevron-right.svg';
import { Image, Text } from '@flash/components';

export type Profile2Props = BoxProps;

const Button = styled(RebassButton)`
  background: primary;
  height: 18px;
  width: 18px;
  border-radius: 50%;
`;

const StoryItem: React.FC<BoxProps & { subtitle: string }> = ({ title, subtitle, ...props }) => (
  <Box mt="1.4rem" {...props}>
    <Flex>
      <Text color="dark_1" ml="0.6rem" variant="s4">
        {title} &nbsp;
      </Text>
      <Text color="primary" variant="s2">
        {subtitle}
      </Text>
    </Flex>
    <Box>
      <Flex alignItems="center" bg="#FAFAFA" padding="1rem" sx={{ borderRadius: '4px' }} {...props}>
        <Image
          height="4.7rem"
          src="https://source.unsplash.com/random/200x200?sig=1"
          sx={{ borderRadius: '0.6rem' }}
          width="4.7rem"
        />
        <Text color="dark_4" flex="1" ml="1.2rem" mr="1rem" variant="s5">
          In 2016 I quit my psychology Masters and signed up for a UX Bootcamp with no plans for the
          future and today I am the ....
        </Text>
        <Button ml="auto" p="0">
          <ChevronRight />
        </Button>
      </Flex>
    </Box>
  </Box>
);

const VideoThumbnail: React.FC<BoxProps> = ({ ...props }) => (
  <Box
    flex="1"
    height="8rem"
    sx={{
      position: 'relative',
      backgroundImage: 'url(https://source.unsplash.com/random/200x200?sig=1)',
      borderRadius: '0.3rem',
    }}
    {...props}
  >
    <Text
      bg="primary"
      color="gray_1"
      px="2rem"
      py="0.5rem"
      sx={{ position: 'absolute', bottom: 0, borderRadius: '0 0 0.3rem 0.3rem' }}
      textAlign="center"
      variant="s5"
      width="100%"
    >
      GET TO KNOW ME
    </Text>
  </Box>
);

export const Profile2: React.FC<Profile2Props> = ({ ...props }) => (
  <Box {...props}>
    <Text color="primary" textAlign="center" variant="h2">
      Alistair&apos;s Story
    </Text>
    <StoryItem subtitle="UX DESIGN" title="MY STORY WITH" />

    <StoryItem subtitle="PRODUCT" title="WHY I ENJOY" />

    <Text
      color="primary"
      css={{ textDecorationLine: 'underline' }}
      mt="0.3rem"
      textAlign="center"
      variant="s5"
    >
      MORE STORIES
    </Text>

    <Text color="dark_1" variant="s5">
      GET TO KNOW THEM!
    </Text>

    <Flex mt="0.6rem">
      <VideoThumbnail />
      <VideoThumbnail ml="1rem" />
    </Flex>

    <Flex mt="1rem">
      <VideoThumbnail />
      <VideoThumbnail ml="1rem" />
    </Flex>
  </Box>
);

Profile2.displayName = 'Profile2';

Profile2.defaultProps = {};
