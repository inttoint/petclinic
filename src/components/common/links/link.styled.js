import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { navElementStyles } from '../../../theme/mixins';

const StyledLink = styled(Link)`
  font-family: inherit;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.greyLight};
  letter-spacing: 2px;
  text-decoration: none;

  ${navElementStyles};

  &:hover {
    color: ${({ theme }) => theme.colors.secondaryLighter};
    transition: all 300ms ease-in-out;
  }
`;

export { StyledLink };
