import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  boxShadowMixin,
  borderMixin,
  navElementStyles
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

const SecondaryLink = styled(StyledLink)`
  ${boxShadowMixin};
  ${borderMixin(({ theme }) => theme.colors.secondary)};

  letter-spacing: 0;

  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: 40px;
  background-color: ${({ theme }) => theme.colors.secondary};

  &:disabled {
    border-color: ${({ theme }) => theme.colors.greyDarker};

    &:hover {
      background-color: rgba(180, 180, 180, 0.5);
      color: ${({ theme }) => theme.colors.primary};
      cursor: not-allowed;
    }
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

export { StyledLink, SecondaryLink };
