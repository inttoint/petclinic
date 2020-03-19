import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  50% {
    border-radius: 50%;
    transform: scale(0.5) rotate(360deg);
  }
  100% {
    transform: scale(1) rotate(720deg);
  }
`;

export const LoaderStyled = styled.div`
  display: flex;
  font-size: 25px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  span {
    position: relative;

    &:before,
    &:after {
      content: '';
      position: relative;
      display: block;
    }

    &:before {
      animation: ${animation} 2.5s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
      width: 1em;
      height: 1em;
      background-color: ${({ theme }) => theme.colorSecondaryLightest};
      border: 1px solid ${({ theme }) => theme.colorPrimary};
    }
  }
`;
