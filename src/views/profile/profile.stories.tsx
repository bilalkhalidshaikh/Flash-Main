import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {
  Profile1,
  Profile1Props,
  Profile2,
  Profile2Props,
  Profile3,
  Profile3Props,
  Profile as ProfilePage,
  ProfileProps,
  FullProfile as FullProfileView,
  FullProfileProps,
} from '.';

export default {
  title: 'Views/Profile',
  component: Profile1,
} as Meta;

const ProfileArgs = {
  width: '30rem',
};

const Profile1Template: Story<Profile1Props> = ({ label, ...args }) => (
  <Profile1 {...args}> {label} </Profile1>
);

export const Profile1View = Profile1Template.bind({});

const Profile2Template: Story<Profile2Props> = ({ label, ...args }) => (
  <Profile2 {...args}> {label} </Profile2>
);

export const Profile2View = Profile2Template.bind({});

const Profile3Template: Story<Profile3Props> = ({ label, ...args }) => (
  <Profile3 {...args}> {label} </Profile3>
);

export const Profile3View = Profile3Template.bind({});

const ProfileTemplate: Story<ProfileProps> = ({ label, ...args }) => (
  <ProfilePage ml="2rem" mt="2rem" width="33rem" {...args}>
    {' '}
    {label}{' '}
  </ProfilePage>
);

export const Profile = ProfileTemplate.bind({});

const FullProfileTemplate: Story<FullProfileProps> = ({ label, ...args }) => (
  <FullProfileView width="33rem" {...args}>
    {' '}
    {label}{' '}
  </FullProfileView>
);

export const FullProfile = FullProfileTemplate.bind({});

Profile1View.args = ProfileArgs;

Profile2View.args = ProfileArgs;

Profile3View.args = ProfileArgs;
