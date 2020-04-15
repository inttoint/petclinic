import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ControlElement = styled.div`
  position: relative;
  width: 50%;
  padding: 35px 10px;
  display: inline-block;
  margin: 1px 0;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.secondaryDarker};
  transition: all 300ms ease-in-out;

  &:nth-child(2n) {
    border-left: 1px solid ${({ theme }) => theme.colors.secondaryMoreDarkness};
  }

  &:after,
  &:before {
    content: '';
    position: absolute;
    display: block;
  }

  &:before {
    height: 100%;
    top: 0;
    left: -1px;
    border-left: 1px solid ${({ theme }) => theme.colors.secondaryMoreDarkness};
  }

  &:after {
    width: 100%;
    height: 0;
    top: auto;
    left: 0;
    bottom: -1px;
    border-bottom: 1px solid
      ${({ theme }) => theme.colors.secondaryMoreDarkness};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryDark};
  }
`;

const ControlLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};

  svg {
    width: 80px;
    height: auto;
    fill: ${({ theme }) => theme.colors.grey};
    transition: 0.3s ease-in-out;

    &:hover {
      fill: rgba(220, 220, 220, 0.8);
      cursor: pointer;
    }
  }

  h5 {
    text-transform: uppercase;
    letter-spacing: 1.5px;
    padding: 10px;
    margin-bottom: 10px;
    transition: 0.3s ease-in-out;

    &:hover {
      color: rgba(220, 220, 220, 0.8);
      cursor: pointer;
    }
  }
`;

export { ControlElement, ControlLink };
