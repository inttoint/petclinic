import styled from 'styled-components';
import {
  borderMixin,
  boxShadowMixin,
  navElementStyles
} from '../../../theme/mixins';

export const PrimaryButton = styled.button`
  ${navElementStyles};
  ${boxShadowMixin};
  ${borderMixin(({ theme }) => theme.colors.secondaryMoreDarkness)};

  font-family: inherit;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.greyLight};
  background-color: ${({ secondary, theme }) =>
    secondary ? theme.colors.primary : theme.colors.secondary};
  letter-spacing: 0;

  display: inline-block;
  padding: 0 3px;
  width: ${({ width }) => (width ? width : '100%')};
  height: 40px;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.primaryDark};
    transition: all 300ms ease-in-out;
  }

  &:disabled {
    border-color: ${({ theme }) => theme.colors.greyDarker};
    background-color: rgba(180, 180, 180, 0.5);
    color: ${({ theme }) => theme.colors.primary};

    &:hover {
      background-color: rgba(180, 180, 180, 0.5);
      color: ${({ theme }) => theme.colors.primary};
      cursor: not-allowed;
    }
  }
`;

export const PrimaryButtonWithIcon = styled(PrimaryButton)`
  display: flex;
  align-items: center;

  svg {
    fill: ${({ theme }) => theme.colors.greyLight};
    margin-right: 5px;
    transition: 0.25s ease-in-out; // ToDo: transition привести к одному значению
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    color: ${({ theme }) => theme.colors.secondary};

    svg {
      fill: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
