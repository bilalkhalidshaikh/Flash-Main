import React from 'react';
import { FlexProps, Flex, Link } from 'rebass/styled-components';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input, Button, Text } from '@flash/components';
import SmallLogo from '@flash/images/small-logo.svg';
import GoogleLogo from '@flash/images/google.svg';
import { SignupHeader } from './shared-components';

export type CreateAccountProps = FlexProps;

const Container = styled(Flex)`
  flex-direction: column;
  align-items: center;
  width: 26.5rem;
  margin: 0 auto;
`;

const SigninText = styled(Text)`
  font-size: 1.8rem;
  line-height: 2.3rem;
  text-align: center;
`;

const JoinWithGoogle = styled(Flex)`
  background: ${props => props.theme.colors.white};
  border: 0.2rem solid ${props => props.theme.colors.primary};
  border-radius: 5rem;
  height: 5rem;
  align-items: center;
  cursor: pointer;
`;

type Inputs = {
  email: string;
  password: string;
};

export const CreateAccount = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <Flex alignItems="center" height="100%" justifyContent="center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Flex>
            <SmallLogo />
            <Text color="primary" fontSize="2.2rem" fontWeight="600" lineHeight="3.3rem" ml="1rem">
              flashmentor.io
            </Text>
          </Flex>
          <SignupHeader mt="4rem">Sign Up, it’s free!</SignupHeader>

          <Text color="dark_1" mt="1rem" variant="s2">
            Ready to spark some connections?
          </Text>

          <JoinWithGoogle mt="5.4rem" px="2rem">
            <Flex>
              <GoogleLogo />
              <Text as="span" color="primary" ml="1.8rem" mt="0.15rem" variant="h5">
                JOIN WITH GOOGLE
              </Text>
            </Flex>
          </JoinWithGoogle>

          <Input
            error={errors.email?.message}
            mt="3.7rem"
            placeholder="Email"
            width="26.5rem"
            {...register('email', {
              required: { value: true, message: 'This field is required.' },
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Please enter a valid email.',
              },
            })}
          />
          <Input
            error={errors.password?.message}
            mt="1rem"
            placeholder="Password (6 or more characters)"
            width="26.5rem"
            {...register('password', {
              required: { value: true, message: 'This field is required.' },
            })}
          />
          <Button mt="3rem" size="large" variant="primary">
            JOIN NOW
          </Button>
          <SigninText mt="1.6rem" textAlign="center">
            {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
            <Text color="dark_4" variant="s4">
              ⚡ Bolt ahead to{' '}
              <Link color="primary" css={{ textDecoration: 'underline' }} href="/signup">
                Sign In
              </Link>
            </Text>
          </SigninText>
        </Container>
      </form>
    </Flex>
  );
};
