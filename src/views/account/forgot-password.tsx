import React from 'react';
import { FlexProps, Flex } from 'rebass/styled-components';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input, Button, Text } from '@flash/components';

export type ForgotPasswordProps = FlexProps;

const Container = styled(Flex)`
  flex-direction: column;
  align-items: center;
  width: 26.5rem;
  margin: 0 auto;
`;

type Inputs = {
  email: string;
};

export const ForgotPassword = () => {
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
          <Text textAlign="center" variant="h1">
            Forgot your Password?
          </Text>

          <Text color="primary" mt="1rem" textAlign="center" variant="h4">
            Don’t worry, it happens to the best of us!
          </Text>

          <Input
            error={errors.email?.message}
            mt="6.6rem"
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
          <Button mt="3.2rem" size="large" variant="primary">
            Next
          </Button>
        </Container>
      </form>
    </Flex>
  );
};
