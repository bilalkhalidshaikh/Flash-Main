import React, { useState } from 'react';
import { Flex, Box, BoxProps } from 'rebass/styled-components';
import theme from '@flash/theme';
import { Home, Matches, Notification, Profile } from '@flash/images';
import styled from 'styled-components';

export type NavigationVariant = 'desktop' | 'mobile';

export interface NavigationProps extends BoxProps {
  variant?: NavigationVariant;
}

const navigationItems = [
  {
    title: '',
    Icon: Home,
  },
  {
    title: '',
    Icon: Matches,
  },
  {
    title: '',
    Icon: Notification,
  },
  {
    title: '',
    Icon: Profile,
  },
];

const NavigationCell = styled(Flex)`
  justify-content: center;
  flex: 1;
  cursor: pointer;
  padding-top: 1.5rem;
`;

const IconContainer = styled(Box)`
  svg {
    path,
    g {
      stroke: ${props => (props.selected ? props.theme.colors.primary : props.theme.colors.gray_3)};
    }

    g path {
      stroke: ${props => (props.selected ? props.theme.colors.primary : props.theme.colors.gray_3)};
      fill: ${props => (props.selected ? props.theme.colors.primary : props.theme.colors.gray_3)};
    }

    g path:nth-child(2) {
      stroke: none;
      fill: ${props => (props.selected ? props.theme.colors.primary : props.theme.colors.gray_3)};
    }
  }
`;

export const Navigation: React.FC<NavigationProps> = ({ ...props }) => {
  const [selected, setSelected] = useState(0);

  return (
    <Flex {...props}>
      {navigationItems.map((item, index) => (
        <NavigationCell
          key={item.title}
          sx={{
            borderTop: `2px solid ${
              selected === index ? theme.colors.primary : theme.colors.gray_3
            }`,
          }}
          onClick={() => setSelected(index)}
        >
          <IconContainer selected={selected === index}>
            <item.Icon />
          </IconContainer>
        </NavigationCell>
      ))}
    </Flex>
  );
};

Navigation.displayName = 'Navigation';

Navigation.defaultProps = {
  variant: 'mobile',
};
