import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Card } from './card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {},
} as Meta;

const commonStyles = {
  fontSize: '2rem',
  height: '30%',
  textAlign: 'center',
  width: '100%',
  justifyContent: 'center',
};

const Template: Story = ({ header, content, footer, ...args }) => (
  <Card height="calc(100vh - 5rem)" p="1.8rem" width="32rem" {...args}>
    <Card.Header sx={{ ...commonStyles }}>{header}</Card.Header>

    <Card.Content alignItems="center" height="40%" sx={{ ...commonStyles }}>
      {content}
    </Card.Content>

    <Card.Footer alignItems="flex-end" sx={{ ...commonStyles }}>
      {footer}
    </Card.Footer>
  </Card>
);

export const CardExample = Template.bind({});

CardExample.args = {
  header: 'Header',
  content: 'Content',
  footer: 'Footer',
};
