import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {
  Projects as ProjectsView,
  ProjectsProps,
  Stories as StoriesView,
  StoriesProps,
  Videos as VideosView,
  VideosProps,
} from '.';

export default {
  title: 'Views/Content',
  component: StoriesView,
} as Meta;

const ProjectsTemplate: Story<ProjectsProps> = ({ ...args }) => (
  <ProjectsView {...args}> </ProjectsView>
);

export const Projects = ProjectsTemplate.bind({});

const StoriesTemplate: Story<StoriesProps> = ({ ...args }) => (
  <StoriesView {...args}> </StoriesView>
);

export const Stories = StoriesTemplate.bind({});

const VideosTemplate: Story<VideosProps> = ({ ...args }) => <VideosView {...args}> </VideosView>;

export const Videos = VideosTemplate.bind({});
