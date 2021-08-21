/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { Flex, Box, BoxProps, Button as RebassButton } from 'rebass/styled-components';
import { Text, Image } from '@flash/components';
import { ChevronRight, FilledStar } from '@flash/images';
import styled from 'styled-components';
import { Header, BackButton } from './shared-components';

export type StoriesProps = BoxProps;

const Story = ({ title, subtitle, content, ...props }) => (
  <Box bg="light_2" sx={{ borderRadius: '0.6rem' }} {...props}>
    <Image
      borderRadius="0.6rem 0.6rem 0 0"
      height="14rem"
      src="https://source.unsplash.com/random/200x200?sig=1"
      width="100%"
    />
    <Box mx="2rem">
      <Flex mt="2.3rem">
        <Text color="dark_1" variant="h5">
          {title} &nbsp;
        </Text>
        <Text color="primary" variant="h2">
          {subtitle}
        </Text>
      </Flex>
      <Text color="dark_4" mt="1.3rem" variant="s1">
        {content}
      </Text>
    </Box>
  </Box>
);

const IconButton = styled(RebassButton)`
  background: primary;
  height: 18px;
  width: 18px;
  border-radius: 50%;
`;

const StoryThumbnail: React.FC<BoxProps & { subtitle: string; featured?: boolean }> = ({
  title,
  subtitle,
  featured,
  ...props
}) => (
  <Box {...props}>
    <Flex>
      <Text color="dark_1" ml="0.6rem" variant="s4">
        {title} &nbsp;
      </Text>
      <Text color="primary" variant="s3">
        {subtitle}
      </Text>
      <Box ml="auto">{featured ? <FilledStar /> : ''}</Box>
    </Flex>
    <Box>
      <Flex alignItems="center" bg="#FAFAFA" padding="1rem" sx={{ borderRadius: '4px' }}>
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
        <IconButton ml="auto" p="0">
          <ChevronRight />
        </IconButton>
      </Flex>
    </Box>
  </Box>
);

export const Stories: React.FC<StoriesProps> = ({ ...props }) => (
  <Box maxWidth="40rem" {...props} p="1rem">
    <Header featured title="ALISTAIR’S STORIES" />
    <Story
      content="In 2016 I quit my psychology Masters and signed up for a UX Bootcamp with no plans for the future and today I am the loren ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit id augue sed faucibus. Morbi sit amet commodo magna. Curabitur eget quam vitae velit fermentum consectetur vitae et massa. Praesent pharetra ultrices maximus. Etiam sit amet varius libero. Aliquam erat volutpat. Aliquam eget convallis ipsum. In vestibulum dapibus mauris posuere pharetra. Vivamus porttitor commodo mauris, id hendrerit leo pellentesque eu vestibulum dapibus mauris posuere pharetra. Vivamus porttitor commodo mauris, id hendrerit leo pellentesque eu"
      mt="2rem"
      subtitle="UX DESIGN"
      title="MY STORY WITH"
    />

    <StoryThumbnail featured mt="3rem" subtitle="UX DESIGN" title="MY STORY WITH" />
    <StoryThumbnail mt="2rem" subtitle="UX DESIGN" title="MY STORY WITH" />
    <StoryThumbnail mt="2rem" subtitle="UX DESIGN" title="MY STORY WITH" />
    <BackButton mb="2rem" mt="4rem" />
  </Box>
);
