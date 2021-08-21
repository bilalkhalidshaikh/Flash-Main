import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Flex } from 'rebass/styled-components';
import {
  Signin,
  SigninProps,
  ForgotPassword,
  ForgotPasswordProps,
  Notification,
  NotificationProps,
  ResetPassword,
  ResetPasswordProps,
} from '.';

export default {
  title: 'Views/Auth',
  component: Signin,
} as Meta;

const SigninTemplate: Story<SigninProps> = ({ ...args }) => <Signin {...args} />;

export const SigninPage = SigninTemplate.bind({});

const ForgotPasswordTemplate: Story<ForgotPasswordProps> = ({ ...args }) => (
  <ForgotPassword {...args} />
);

export const ForgotPasswordPage = ForgotPasswordTemplate.bind({});

const NotificationTemplate: Story<NotificationProps> = ({ ...args }) => <Notification {...args} />;

export const NotificationPage = NotificationTemplate.bind({});

const ResetPasswordTemplate: Story<ResetPasswordProps> = ({ ...args }) => (
  <ResetPassword {...args} />
);

export const ResetPasswordPage = ResetPasswordTemplate.bind({});
