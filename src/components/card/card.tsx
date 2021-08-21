import React from 'react';
import { Box, BoxProps, Flex, FlexProps } from 'rebass/styled-components';

export type CardProps<P = Record<string, unknown>> = {
  (props: P): JSX.Element;
  defaultProps?: Partial<P>;
  children?: React.ReactNode;
  displayName: string;
  Header: React.FC<FlexProps>;
  Content: React.FC<FlexProps>;
  Footer: React.FC<FlexProps>;
};

export const Card: CardProps<BoxProps> = ({ variant, children, ...props }) => (
  <Box tx="card" variant={variant} {...props}>
    {React.Children.map(children, child =>
      React.isValidElement(child) ? React.cloneElement(child, { variant }) : child
    )}
  </Box>
);

Card.Content = ({ children, ...props }) => (
  <Flex tx="card.content" {...props}>
    {children}
  </Flex>
);

Card.Header = ({ children, ...props }) => (
  <Flex tx="card.header" {...props}>
    {children}
  </Flex>
);

Card.Footer = ({ children, ...props }) => (
  <Flex tx="card.footer" {...props}>
    {children}
  </Flex>
);

Card.defaultProps = {
  variant: 'default',
};

Card.displayName = 'Card';
Card.Content.displayName = 'Card Content';
Card.Header.displayName = 'Card Header';
Card.Footer.displayName = 'Card Footer';
