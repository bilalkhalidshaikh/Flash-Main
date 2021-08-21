import { variant, ResponsiveValue } from 'styled-system';
import propTypes from '@styled-system/prop-types';

export type SizeTypes = 'small' | 'medium' | 'large';

export interface SizeProps {
  size?: ResponsiveValue<SizeTypes>;
}

const getProps = (filter: (prop: string) => boolean) => (allProps: any) => {
  const selectedProps: Record<string, any> = {};

  Object.keys(allProps).forEach(prop => {
    if (filter(prop || '')) selectedProps[prop] = allProps[prop];
  });

  return selectedProps;
};

export const size = (sizes: string) =>
  variant({
    prop: 'size',
    scale: sizes,
    variants: {
      large: {},
      medium: {},
      small: {},
    },
  });

const spaceProps = Object.keys(propTypes.space);

export const getSpaceProps = getProps(prop => spaceProps.includes(prop));
export const omitSpaceProps = getProps(prop => !spaceProps.includes(prop));
