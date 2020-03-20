import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  boxShadowMixin,
  borderMixin,
  navElementStyles
} from '../../../theme/mixins';

const LinkDefault = styled(Link)`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.greyLight};
  padding: 5px 20px 5px 0;
  letter-spacing: 2px;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.secondaryLighter};
    transition: all 300ms ease-in-out;
  }
`;

const LinkSecondary = styled(LinkDefault)`
  ${boxShadowMixin};
  ${borderMixin(({ theme }) => theme.colors.secondary)};

  letter-spacing: 0;

  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.greyLight};

  ${navElementStyles};

  width: 165px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.greyDarkest};
    color: ${({ theme }) => theme.colors.white};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    color: ${({ theme }) => theme.colors.secondary};
  }

  padding: 0 3px;
  display: flex;
  align-items: center;

  svg {
    fill: ${({ theme }) => theme.colors.greyLight};
    margin-right: 5px;
    transition: 0.25s ease-in-out; // ToDo: transition привести к одному значению
  }

  &:hover {
    svg {
      fill: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export { LinkDefault, LinkSecondary };
