import React, { useState } from 'react';
import { FlexProps, Flex } from 'rebass/styled-components';
import styled from 'styled-components/macro';
import { Input, Button, Text } from '@flash/components';

import { Progress2, Brainstorm, Explore, Invest, Learn, Mentor, Network } from '@flash/images';
import { SignupHeader } from './shared-components';

export type MotivationsProps = FlexProps;

const motivations = [
  {
    title: 'mentor',
    image: <Mentor />,
  },
  {
    title: 'network',
    image: <Network />,
  },
  {
    title: 'learn',
    image: <Learn />,
  },
  {
    title: 'brainstorm',
    image: <Brainstorm />,
  },
  {
    title: 'invest',
    image: <Invest />,
  },
  {
    title: 'explore',
    image: <Explore />,
  },
];

const Card = styled(Flex)`
  width: 8.5rem;
  height: 8.5rem;

  box-shadow: 0px 0.25rem 0.25rem rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  border: ${props => (props.selected ? `2px solid ${props.theme.colors.primary}` : 'none')};
`;

interface MotivationCardProps extends FlexProps {
  title: string;
  image: any;
  selected?: boolean;
}
const MotivationCard: React.FC<MotivationCardProps> = ({ title, image, ...props }) => (
  <Card {...props}>
    {image}
    <Text mt="0.75rem">{title}</Text>
    {props.selected}
  </Card>
);

const Container = styled(Flex)`
  flex-direction: column;
  align-items: center;
  width: 32rem;
  margin: 0 auto;
`;

export const Motivations = () => {
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
        <SignupHeader mb="2rem">Let’s get started!</SignupHeader>
        <Progress2 />
        <Text color="primary" mt="6rem" textAlign="center" variant="h2">
          What are your motivations?
        </Text>

        <Text color="gray_3" mt="0.5rem" textAlign="center" variant="s4">
          Choose upto 3 reasons why you’re here. These feature on your profile and help us match you
          better
        </Text>

        <Flex flexWrap="wrap" justifyContent="center" mt="3rem" width="32rem">
          {motivations.map((motivation, index) => (
            <MotivationCard
              key={motivation.title}
              image={motivation.image}
              mr={(index + 1) % 3 ? '1.8rem' : ''}
              mt={Math.floor(index / 3) > 0 ? '2.3rem' : ''}
              selected={selected.includes(index)}
              title={motivation.title}
              onClick={() => {
                const filteredSelected = selected.filter(value => value !== index);
                let newSelected = filteredSelected;

                if (filteredSelected.length === selected.length)
                  newSelected = [...filteredSelected, index];

                setSelected(newSelected);
                setError(getErrorState(newSelected));
              }}
            />
          ))}
        </Flex>

        <Input error={error} mt="2.3rem" type="hidden" value={selected.length} />

        <Flex mt="7rem">
          <Button mr="1.6rem" size="medium" variant="secondary">
            BACK
          </Button>
          <Button
            size="medium"
            variant={error !== '' ? 'disabled' : 'primary'}
            onClick={onClickNext}
          >
            Next
          </Button>
        </Flex>
      </Container>
    </Flex>
  );
};
