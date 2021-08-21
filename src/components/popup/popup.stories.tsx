import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Popup, PopupProps } from '.';

export default {
  title: 'Components/Popup',
  component: Popup,
  argTypes: {
    variant: { control: 'radio', options: ['default', 'outlined'] },
  },
} as Meta;

const Template: Story<PopupProps> = ({ label, ...args }) => <Popup {...args}> {label} </Popup>;

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
