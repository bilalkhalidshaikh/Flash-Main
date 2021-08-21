import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {
  MessageThumbnail as MessageThumbnailComponent,
  MessageThumbnailProps,
  MessageHeader as MessageHeaderComponent,
  MessageHeaderProps,
  MessageArea as MessageAreaComponent,
  MessageAreaProps,
} from '.';

export default {
  title: 'Components/Message',
  component: MessageThumbnailComponent,
} as Meta;

const MessageThumbnailTemplate: Story<MessageThumbnailProps> = ({ ...args }) => (
  <MessageThumbnailComponent {...args} />
);

export const MessageThumbnail = MessageThumbnailTemplate.bind({});

MessageThumbnail.args = {
  message: 'I‘m happy this career has such great...',
  name: 'Albert Bell',
  time: 'Yesterday',
};

const MessageHeaderTemplate: Story<MessageHeaderProps> = ({ ...args }) => (
  <MessageHeaderComponent {...args} />
);

export const MessageHeader = MessageHeaderTemplate.bind({});

const MessageAreaTemplate: Story<MessageAreaProps> = ({ ...args }) => (
  <MessageAreaComponent {...args} />
);

export const MessageArea = MessageAreaTemplate.bind({});
