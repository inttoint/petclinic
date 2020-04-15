import styled from 'styled-components';

export const BurgerButton = styled.button`
  display: none;
  cursor: pointer;
  position: relative;
  margin-left: auto;
  margin-right: 40px;
  border: none;
  background: none;
  z-index: 97;
  outline: none;

  span {
    display: block;
    width: 40px;
    height: 3px;
    margin-bottom: 8px;
    position: relative;

    background: ${({ theme }) => theme.colors.grey};
    border-radius: 1px;
    box-shadow: 2px 2px 3px ${({ theme }) => theme.colors.shadowColor};
    z-index: 99;

    transform-origin: 0;
    transition: all 300ms ease-in-out;

    &:first-child {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(35deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      right: 5px;
      background-color: ${({ theme }) => theme.colors.secondaryLight};
      opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
      transform: ${({ isOpen }) =>
        isOpen ? 'translateX(10px)' : 'translateX(0px)'};
    }

    &:last-child {
      margin-bottom: 0;
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-35deg)' : 'rotate(0)')};
    }
  }

  @media (max-width: 800px) {
    display: block;
  }
`;
