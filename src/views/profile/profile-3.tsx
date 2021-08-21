import React from 'react';
import { Box, Flex, Button as RebassButton, BoxProps, FlexProps } from 'rebass/styled-components';
import styled from 'styled-components';
import { Text } from '@flash/components';
import Question from '@flash/images/question.svg';
import ChevronRight from '@flash/images/chevron-right.svg';
import Portfolio from '@flash/images/portfolio.svg';
import colors from '@flash/theme/colors';

export type Profile3Props = BoxProps;

const Button = styled(RebassButton)`
  background: primary;
  height: 18px;
  width: 18px;
  border-radius: 50%;
`;

const PurpleQuestion = styled(Question)`
  path {
    fill: ${colors.primary};
  }
`;

export const QuestionItem: React.FC<FlexProps & { question: string }> = ({
  question,
  ...props
}) => (
  <Flex
    alignItems="center"
    bg="#FAFAFA"
    flex="1"
    padding="0.75rem"
    sx={{ borderRadius: '4px' }}
    width="100%"
    {...props}
  >
    <PurpleQuestion />
    <Text color="dark_1" ml="1.2rem" mr="1rem" variant="s4">
      {question}
    </Text>
    <Button ml="auto" p="0">
      <ChevronRight />
    </Button>
  </Flex>
);

const PortfolioItem: React.FC<BoxProps & { title: string }> = ({ title, ...props }) => (
  <Flex
    alignItems="center"
    bg="#F0F0F0"
    flexDirection="column"
    height="8.2rem"
    justifyContent="center"
    p="0rem"
    sx={{ borderRadius: '2rem' }}
    {...props}
  >
    <Portfolio />
    <Text color="primary" mt="0.5rem" textAlign="center" variant="s4">
      {title}
    </Text>
  </Flex>
);

export const Profile3: React.FC<Profile3Props> = ({ ...props }) => (
  <Box {...props}>
    <Text color="dark_1" variant="s5">
      ASK ME
    </Text>
    <QuestionItem question="How to conduct user research better?" />
    <QuestionItem mt="1.8rem" question="How to conduct user research better?" />
    <QuestionItem mt="1.8rem" question="How to conduct user research better?" />

    <Text color="dark_1" mt="3rem" variant="s5">
      PORTFOLIO & PROJECTS
    </Text>

    <Flex mt="0.8rem">
      <PortfolioItem mr="1.5rem" title="Digital Art Portfolio" />
      <PortfolioItem mr="1.5rem" title="Digital Art Portfolio" />
      <PortfolioItem title="Digital Art Portfolio" />
    </Flex>
    <Flex mt="1.3rem">
      <PortfolioItem mr="1.5rem" title="Digital Art Portfolio" />
      <PortfolioItem mr="1.5rem" title="Digital Art Portfolio" />
      <PortfolioItem title="Digital Art Portfolio" />
    </Flex>
  </Box>
);

Profile3.displayName = 'Profile3';

Profile3.defaultProps = {};
