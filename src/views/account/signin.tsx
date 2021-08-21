import React from 'react';
import { FlexProps, Flex, Link } from 'rebass/styled-components';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input, Button, Text } from '@flash/components';
import Logo from '@flash/images/logo.svg';

export type SigninProps = FlexProps;

const Container = styled(Flex)`
  flex-direction: column;
  align-items: center;
  width: 26.5rem;
  margin: 0 auto;
`;

const ForgotPassword = styled(Link)`
  display: block;
  font-size: 1.4rem;
  text-decoration: none;
  font-weight: 400;
  text-align: right;
  color: ${props => props.theme.colors.primary};
`;

const SignupText = styled(Text)`
  font-size: 1.8rem;
  line-height: 2.3rem;
  text-align: center;
`;

type Inputs = {
  email: string;
  password: string;
};

export const Signin = () => {
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
          <Logo />
          <Text
            color="primary"
            fontSize="3.3rem"
            fontWeight="600"
            lineHeight="4.9rem"
            textAlign="center"
          >
            flashmentor.io
          </Text>
          <Text color="grey_1" textAlign="center" variant="h3" width="21.5rem">
            Ready to{' '}
            <Text as="span" fontWeight="600">
              spark
            </Text>{' '}
            some connections?
          </Text>

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
            mt="2.4rem"
            placeholder="Password"
            width="26.5rem"
            {...register('password', {
              required: { value: true, message: 'This field is required.' },
            })}
          />
          <ForgotPassword href="/forgot-password" mt="0.9rem">
            Forgot Password?
          </ForgotPassword>
          <Button mt="2.1rem" size="large" variant="primary">
            SIGN IN
          </Button>
          <SignupText mt="1.6rem" textAlign="center">
            Don&apos;t have an account?
            <br />
            <Text as="span" color="primary">
              <Link color="primary" href="/signup">
                Sign up
              </Link>{' '}
              in a flash
            </Text>
          </SignupText>
        </Container>
      </form>
    </Flex>
  );
};
