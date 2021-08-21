/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { Flex, Box, BoxProps } from 'rebass/styled-components';
import { Text } from '@flash/components';
import { FilledStar } from '@flash/images';
import { Header, BackButton } from './shared-components';

export type VideosProps = BoxProps;

const VideoThumbnail: React.FC<BoxProps & { featured?: boolean }> = ({ featured, ...props }) => (
  <Flex flexDirection="row" mx="auto" sx={{ position: 'relative' }} width="fit-content" {...props}>
    <Box
      height="16rem"
      sx={{
        position: 'relative',
        backgroundImage: 'url(https://source.unsplash.com/random/250x160?sig=1)',
        borderRadius: '0.3rem',
        backgroundSize: 'cover',
      }}
      width="25rem"
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
    <Box ml="0.8rem" sx={{ position: 'absolute', right: '-2rem' }}>
      {featured ? <FilledStar /> : ''}
    </Box>
  </Flex>
);

export const Videos: React.FC<VideosProps> = ({ ...props }) => (
  <Box {...props} p="1rem">
    <Header title="VIDEOS" />
    <VideoThumbnail featured mt="3rem" />
    <VideoThumbnail mt="4rem" />
    <VideoThumbnail mt="4rem" />
    <BackButton mb="2rem" mt="4rem" />
  </Box>
);
