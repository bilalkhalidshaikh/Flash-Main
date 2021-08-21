import React from 'react';
import { FlexProps, Flex, Image } from 'rebass/styled-components';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input, Button, Text } from '@flash/components';
import nameImage from '@flash/images/name.png';
import Progress1 from '@flash/images/progress-1.svg';

export type NameProps = FlexProps;

const Container = styled(Flex)`
  flex-direction: column;
  align-items: center;
  width: 26.5rem;
  margin: 0 auto;
`;

type Inputs = {
  email: string;
  password: string;
};

export const Name = () => {
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
          <Progress1 />
          <Image mt="1.2rem" src={(nameImage as unknown) as string} />
          <Text color="primary" mt="1rem" variant="h1">
            Hello!
          </Text>

          <Text color="dark_1" mt="0.5rem" variant="s2">
            Ready to spark some connections?
          </Text>

          <Input
            error={errors.email?.message}
            mt="3.8rem"
            placeholder="Name"
            width="26.5rem"
            {...register('name', {
              required: { value: true, message: 'This field is required.' },
            })}
          />
          <Button mt="12rem" size="large" variant="primary">
            Let&apos;s get started!
          </Button>
        </Container>
      </form>
    </Flex>
  );
};
