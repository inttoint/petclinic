import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  navElementStyles,
  boxShadowMixin,
  borderMixin
} from '../../../theme/mixins';

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

const WhiteLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  display: block;
  padding: 10px;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.white};
  //width: 100%;

  &:hover {
    ${borderMixin(({ theme }) => theme.colors.white)};
    ${boxShadowMixin};
    transition: all 300ms ease-in-out;
  }
`;

export { StyledLink, WhiteLink };
