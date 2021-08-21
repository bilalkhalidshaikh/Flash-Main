import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Flex, Image, Text } from 'rebass/styled-components';
import { Carousel } from './carousel';

export default {
  title: 'Components/Carousel',
  component: Carousel,
  argTypes: {},
} as Meta;

const Template: Story = ({ ...args }) => (
  <Carousel width="30rem" {...args}>
    <Flex flexDirection="column" height="30rem" justifyContent="center" width="30rem">
      <Image height="10rem" mx="10rem" src="https://source.unsplash.com/random/200x200?sig=1" />
      <Text mt="1rem" textAlign="center">
        This is an image
      </Text>
    </Flex>
    <Flex flexDirection="column" height="30rem" justifyContent="center" width="30rem">
      <Image height="10rem" mx="10rem" src="https://source.unsplash.com/random/200x200?sig=1" />
      <Text mt="1rem" textAlign="center">
        This is another image
      </Text>
    </Flex>
    <Flex flexDirection="column" height="30rem" justifyContent="center" width="30rem">
      <Image height="10rem" mx="10rem" src="https://source.unsplash.com/random/200x200?sig=1" />
      <Text mt="1rem" textAlign="center">
        This is a 3rd image
      </Text>
    </Flex>
  </Carousel>
);

export const CarouselExample = Template.bind({});

CarouselExample.args = {};
