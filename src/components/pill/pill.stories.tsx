import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Pill, PillProps } from './pill';

export default {
  title: 'Components/Pill',
  component: Pill,
  argTypes: {
    variant: { control: 'radio', options: ['default', 'outlined'] },
  },
} as Meta;

const Template: Story<PillProps> = ({ label, ...args }) => <Pill {...args}> {label} </Pill>;

export const Default = Template.bind({});

Default.args = {
  variant: 'default',
  label: 'mentor',
};

export const Outlined = Template.bind({});

Outlined.args = {
  variant: 'outlined',
  label: 'crypto',
};
