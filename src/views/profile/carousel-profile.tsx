import React from 'react';
import { Flex, Box, BoxProps } from 'rebass/styled-components';
import { Carousel, Button, ButtonProps } from '@flash/components';
import styled from 'styled-components';
import { Profile1, Profile2, Profile3 } from './index';

export type ProfileProps = BoxProps;

const CarouselContainer = styled(Box)`
  border: 0.1rem solid #d9d9d9;
  box-sizing: border-box;
  box-shadow: 0 0.2rem 0.2rem 0.1rem rgba(0, 0, 0, 0.11);
  border-radius: 2rem;
  position: relative;
  padding-bottom: 9.5rem;
`;

const ButtonContainer = styled(Flex)`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const FooterButton = styled(Button)`
  flex: 1;
  height: 7rem;
  border-radius: ${props => (props.variant === 'primary' ? '0 0 0 2rem' : '0 0 2rem 0')};
`;

export const Profile: React.FC<ProfileProps> = ({ ...props }) => (
  <CarouselContainer {...props}>
    <Carousel padding="2.3rem 1rem">
      <Profile1 p="1.8rem" />
      <Profile2 p="1.8rem" />
      <Profile3 p="1.8rem" />
    </Carousel>
    <ButtonContainer>
      <FooterButton variant="primary">CONFIRM</FooterButton>
      <FooterButton variant="secondary">DECLINE</FooterButton>
    </ButtonContainer>
  </CarouselContainer>
);

Profile.displayName = 'ProfilePage';

Profile.defaultProps = {};
