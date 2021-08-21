/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { Flex, Box, BoxProps } from 'rebass/styled-components';
import { Text } from '@flash/components';
import { Portfolio, FilledStar } from '@flash/images';
import { Header } from './shared-components';

export type ProjectsProps = BoxProps;

const ProjectsItem: React.FC<BoxProps & { title: string; featured?: boolean }> = ({
  title,
  featured,
  ...props
}) => (
  <Flex alignItems="center" maxWidth="28rem" mx="auto" {...props}>
    <Flex
      alignItems="center"
      bg="gray_1"
      height="5rem"
      justifyContent="center"
      sx={{ borderRadius: '1.2rem' }}
      width="5rem"
    >
      <Portfolio />
    </Flex>
    <Text color="dark_4" ml="1.2rem" textAlign="center" variant="h2">
      {title}
    </Text>
    <Box ml="auto" mt="0.2rem">
      {featured ? <FilledStar /> : ''}
    </Box>
  </Flex>
);

export const Projects: React.FC<ProjectsProps> = ({ ...props }) => (
  <Box {...props} p="1rem">
    <Header title="PROJECTS" />
    <ProjectsItem featured mt="5rem" title="Digital Art Portfolio" />
    <ProjectsItem featured mt="2rem" title="My Personal Website" />
    <ProjectsItem featured mt="2rem" title="Freelance Project" />
    <ProjectsItem mt="2rem" title="Remote Sensor Project" />
  </Box>
);
