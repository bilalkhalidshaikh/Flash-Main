import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Navigation, NavigationProps } from './navigation';

export default {
  title: 'Components/Navigation',
  component: Navigation,
  argTypes: {
    variant: { control: 'radio', options: ['desktop', 'mobile'] },
  },
} as Meta;

const Template: Story<NavigationProps> = ({ label, ...args }) => (
  <Navigation {...args}> </Navigation>
);

export const Default = Template.bind({});

Default.args = {
  width: '30rem',
  marginTop: '5rem',
};
