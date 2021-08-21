import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: { control: 'radio', options: ['medium', 'small', 'large'] },
  },
} as Meta;

const Template: Story<ButtonProps> = ({ label, ...args }) => <Button {...args}> {label} </Button>;

export const Primary = Template.bind({});

Primary.args = {
  variant: 'primary',
  size: 'medium',
  label: 'Button',
};

export const Secondary = Template.bind({});

Secondary.args = {
  variant: 'secondary',
  label: 'Button',
};

export const Large = Template.bind({});

Large.args = {
  size: 'large',
  variant: 'primary',
  label: 'Button',
};

export const Small = Template.bind({});

Small.args = {
  size: 'small',
  label: 'Button',
};
