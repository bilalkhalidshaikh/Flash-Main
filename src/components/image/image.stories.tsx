import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Image, ImageProps } from './image';

export default {
  title: 'Components/Image',
  component: Image,
} as Meta;

const Template: Story<ImageProps> = ({ ...args }) => (
  <Image src="https://source.unsplash.com/random/200x200?sig=1" {...args} />
);

export const Profile = Template.bind({});

Profile.args = {
  variant: 'profile',
};

const CircleTemplate: Story<ImageProps> = ({ ...args }) => (
  <Image src="https://source.unsplash.com/random/200x200?sig=1" {...args} />
);

export const Circle = CircleTemplate.bind({});

Circle.args = {
  variant: 'circle',
};
