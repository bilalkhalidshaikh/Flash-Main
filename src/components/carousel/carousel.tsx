import React from 'react';
import styled from 'styled-components';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import ReactCarousel, { CarouselProps as ReactCarouselProps, DotProps } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { space } from 'styled-system';
import colors from '@flash/theme/colors';

export interface CarouselProps extends Omit<ReactCarouselProps, 'responsive'> {
  responsive?: Record<string, any>;
  width?: string | number;
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const StyledCarousel = styled(ReactCarousel)<CarouselProps>`
  padding-bottom: 3rem;
  width: ${props => props.width};

  .react-multi-carousel-dot-list {
    margin: 0 auto;
  }

  .react-multiple-carousel__arrow {
    background: rgba(250, 250, 250, 0.3);
  }

  .react-multiple-carousel__arrow::before {
    color: ${colors.primary};
  }

  .react-multiple-carousel__arrow--left {
    left: 0;
  }

  .react-multiple-carousel__arrow--right {
    right: 0;
  }

  ${space}
`;

const Dot = styled.li<DotProps>`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  margin-right: 0.5rem;
  background-color: ${props => (props.active ? colors.primary : colors.silverChalice)};
`;
const CustomDot: React.FC<DotProps> = ({ active }) => <Dot active={active} />;

export const Carousel: React.FC<CarouselProps> = ({ children, ...props }) => (
  <StyledCarousel
    customDot={<CustomDot />}
    draggable={false}
    responsive={responsive}
    showDots
    {...props}
  >
    {children}
  </StyledCarousel>
);

Carousel.displayName = 'Carousel';
