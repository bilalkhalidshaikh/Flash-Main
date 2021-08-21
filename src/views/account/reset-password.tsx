import React from 'react';
import { FlexProps, Flex } from 'rebass/styled-components';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Text, Input, Button } from '@flash/components';

export type ResetPasswordProps = FlexProps;

const Container = styled(Flex)`
  flex-direction: column;
  align-items: center;
  width: 26.5rem;
  margin: 0 auto;
`;

type Inputs = {
  newPassword: string;
  confirmPassword: string;
};

export const ResetPassword = () => {
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
          <Text variant="h1">Hello, Esther!</Text>

          <Text fontSize="2.2rem" mt="1rem" variant="h3">
            Please reset your password
          </Text>

          <Input
            error={errors.newPassword?.message}
            mt="6.5rem"
            placeholder="New Password"
            width="26.5rem"
            {...register('newPassword', {
              required: { value: true, message: 'This field is required.' },
            })}
          />
          <Input
            error={errors.confirmPassword?.message}
            mt="2.4rem"
            placeholder="Confirm Password"
            width="26.5rem"
            {...register('confirmPassword', {
              required: { value: true, message: 'This field is required.' },
            })}
          />

          <Button mt="6.5rem" size="large" variant="primary">
            RESET PASSWORD
          </Button>
        </Container>
      </form>
    </Flex>
  );
};
