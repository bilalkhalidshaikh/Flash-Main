import styled from 'styled-components';
import { Text } from '../../components';

export const SignupHeader = styled(Text)`
  color: ${props => props.theme.colors.primary};
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 2.3rem;
`;
