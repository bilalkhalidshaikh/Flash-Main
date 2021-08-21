import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {
  CreateAccount,
  CreateAccountProps,
  Name,
  NameProps,
  Motivations,
  MotivationsProps,
  Interests,
  InterestsProps,
} from '.';

export default {
  title: 'Views/Signup',
  component: CreateAccount,
} as Meta;

const CreateAccountTemplate: Story<CreateAccountProps> = ({ ...args }) => (
  <CreateAccount {...args} />
);

export const CreateAccountPage = CreateAccountTemplate.bind({});

const NameTemplate: Story<NameProps> = ({ ...args }) => <Name {...args} />;

export const NamePage = NameTemplate.bind({});

const MotivationsTemplate: Story<MotivationsProps> = ({ ...args }) => <Motivations {...args} />;

export const MotivationsPage = MotivationsTemplate.bind({});

const InterestsTemplate: Story<InterestsProps> = ({ ...args }) => <Interests {...args} />;

export const InterestsPage = InterestsTemplate.bind({});
