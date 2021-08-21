import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Text, TextProps } from './text';

export default {
  title: 'Components/Text',
  component: Text,
} as Meta;

const Template: Story<TextProps> = ({ label, ...args }) => <Text {...args}> {label} </Text>;

export const Body = Template.bind({});

Body.args = {
  variant: 'default',
  label: `You can help them in Crypto 
  They can offer you help with UX Design`,
};

export const Section = Template.bind({});

Section.args = {
  variant: 's3',
  label: 'HERE TO LEARN ABOUT',
};

export const Heading = Template.bind({});

Heading.args = {
  variant: 'h1',
  label: 'ALISTAIR COWELL',
};

export const SubHeading = Template.bind({});

SubHeading.args = {
  variant: 's1',
  label: 'Design Lead @ YistCoin',
};
