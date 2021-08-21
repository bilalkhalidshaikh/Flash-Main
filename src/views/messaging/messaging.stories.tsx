import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { AllChats, AllChatsProps, Requests, RequestsProps } from '.';

export default {
  title: 'Views/Messaging',
  component: AllChats,
} as Meta;

const AllChatsTemplate: Story<AllChatsProps> = ({ ...args }) => <AllChats {...args}> </AllChats>;

export const AllChatsPage = AllChatsTemplate.bind({});

const RequestsTemplate: Story<RequestsProps> = ({ ...args }) => <Requests {...args}> </Requests>;

export const RequestsPage = RequestsTemplate.bind({});
