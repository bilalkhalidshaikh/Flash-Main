import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Input, InputProps } from './input';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = ({ ...args }) => <Input {...args} />;

export const DefaultInput = Template.bind({});

DefaultInput.args = {
  placeholder: 'Email',
  variant: 'default',
};

export const ErrorInput = Template.bind({});

ErrorInput.args = {
  placeholder: 'Email',
  variant: 'error',
  error: 'required',
};

export const LabelInput = Template.bind({});

LabelInput.args = {
  placeholder: 'Name',
  variant: 'default',
  label: 'First Name',
  subtext: 'subtext',
};
