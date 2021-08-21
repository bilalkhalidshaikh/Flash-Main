/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';
import { FlexProps, Flex, Box } from 'rebass/styled-components';
import styled from 'styled-components/macro';
import { Pill, Button, Text } from '@flash/components';

import { Progress3 } from '@flash/images';
import { SignupHeader } from './shared-components';

export type InterestsProps = FlexProps;

const Container = styled(Flex)`
  flex-direction: column;
  align-items: center;
  width: 32rem;
  margin: 0 auto;
`;

export const Interests = () => {
  const [selected, setSelected] = useState<number[]>([]);
  const [error, setError] = useState<string>('');

  const getErrorState = (selectedMotivations = selected) => {
    if (selectedMotivations.length === 0) return 'Please choose atleast 1 motivation!';
    if (selectedMotivations.length > 3) return 'Please choose up to 3 motivations!';

    return '';
  };

  const onClickNext = () => {
    setError(getErrorState());

    return false;
  };

  return (
    <Flex alignItems="center" height="100%" justifyContent="center">
      <Container>
        <SignupHeader mb="2rem">Your Interests</SignupHeader>
        <Progress3 />
        <Text color="primary" mt="5rem" variant="h4">
          Show others what you know!
        </Text>

        <Flex mt="0.8rem">
          <Pill>designing</Pill>
          <Pill ml="0.8rem">marketing</Pill>
          <Pill ml="0.8rem">finance</Pill>
        </Flex>

        <Flex mt="0.8rem">
          <Pill>strategy</Pill>
          <Pill ml="0.8rem">cryptocurrency</Pill>
          <Pill ml="0.8rem">sales</Pill>
        </Flex>

        <Text color="primary" mt="5rem" variant="h4">
          What would you like to learn?
        </Text>

        <Flex mt="0.8rem">
          <Pill>designing</Pill>
          <Pill ml="0.8rem">marketing</Pill>
          <Pill ml="0.8rem">finance</Pill>
        </Flex>

        <Flex mt="0.8rem">
          <Pill>strategy</Pill>
          <Pill ml="0.8rem">cryptocurrency</Pill>
          <Pill ml="0.8rem">sales</Pill>
        </Flex>

        <Button
          mt="5rem"
          size="large"
          variant={error !== '' ? 'disabled' : 'primary'}
          onClick={onClickNext}
        >
          All set, let’s go!
        </Button>
        <Button mt="1.6rem" size="medium" variant="secondary">
          BACK
        </Button>
      </Container>
    </Flex>
  );
};
