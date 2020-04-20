import styled, { css, keyframes } from 'styled-components';
import { boxShadowMixin, sizeMixin } from '../../../assets/theme/mixins';

const showCard = keyframes`
  0% {
    width: 0;
  }
`;

const SCard = styled.div`
  * {
    outline: none;
    user-select: none;
  }

  ${sizeMixin('400px', '100px')};
  ${boxShadowMixin};
  transform: translate(6%, 0%);
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.greyDark};
  color: ${({ theme }) => theme.colors.secondaryDarker};
  animation: ${showCard} 0.5s forwards ease-in-out;
  margin: 0 10px 30px;
`;

const rotatePhoto = keyframes`
  100% {
    transform: rotate(-360deg);
  }
`;

const SPhoto = styled.div`
  ${sizeMixin('100px', '100px')};
  ${boxShadowMixin};
  box-sizing: border-box;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid ${({ theme }) => theme.colors.greyLight};
  background-color: ${({ theme }) => theme.colors.greyLight};
  margin-left: -50px;
  animation: ${rotatePhoto} 0.5s forwards ease-in-out;

  img {
    width: 100%;
  }
`;

const SContent = styled.div`
  box-sizing: border-box;
  padding: 10px;
  overflow: hidden;
  position: absolute;
  ${sizeMixin('100%', '100%')};
  top: 0;
  left: 0;

  &:before {
    content: '';
    position: absolute;
    ${sizeMixin('300px', '150px')};
    background-color: ${({ theme }) => theme.colors.grey};
    left: 0;
    top: -20px;
    z-index: -1;
    transform: rotate(-8deg);
  }
`;

const SText = styled.div`
  margin-top: 10px;
  margin-left: 60px;

  h3,
  h6 {
    font-weight: normal;
    margin: 3px 0;
    letter-spacing: 0.5px;
    white-space: nowrap;
  }
`;

const SRow = styled.div`
  display: flex;
  width: 65%;
  justify-content: space-between;
  align-items: baseline;
`;

const popBtn = keyframes`
  0% {
    transform: scale(0);
  }
  80% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const toHamburger = keyframes`
  from {
    transform: translateY(-50%) rotate(-180deg);
  }
`;

const toArrow = keyframes`
  from {
    transform: translateY(-50%) rotate(0deg);
  }
  to {
    transform: translateY(-50%) rotate(180deg);
  }
`;

const SActionButton = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  ${sizeMixin('50px', '50px')};
  ${boxShadowMixin};
  position: absolute;
  right: 25px;
  top: 25px;
  border-radius: 50%;
  z-index: 10;
  cursor: pointer;
  transition:300ms ease-in-out;
  animation: ${popBtn} 0.3s both ease-in-out 0.5s;

  &:hover {
    box-shadow: 0 0 5px 5px ${({ theme }) => theme.colors.greyDarker};
    background-color: ${({ theme }) => theme.colors.primary};

    span,
    span:before,
    span:after {
      background-color: ${({ theme }) => theme.colors.secondaryLighter};
    }
  }
  
  span {
    ${sizeMixin('60%', '2px')};
    position: absolute;
    background-color: ${({ theme }) => theme.colors.greyLight};
    top: 50%;
    left: 15%;
    transform: translateY(-50%);
    animation: ${({ isOpen }) =>
      isOpen ? toArrow : toHamburger} 0.3s forwards ease-in-out;

    &:before,
    &:after {
      content: '';
      ${sizeMixin('100%', '2px')};
      position: absolute;
      background-color: ${({ theme }) => theme.colors.greyLight};
      transform: rotate(0deg);
      ${({ isOpen }) => isOpen && 'width: 60%;'};
      left: ${({ isOpen }) => (isOpen ? '14.3px' : '2px')};
    }

    &:before {
      margin-top: -7px;
      ${({ isOpen }) => isOpen && 'transform: rotate(30deg) translateY(3px);'};
    }

    &:after {
      margin-top: 7px;
      ${({ isOpen }) => isOpen && 'transform: rotate(-30deg) translateY(-3px);'}
  }
`;

function createBoxItem(count) {
  let styles = '';

  for (let i = 0; i < count; i++) {
    const deg = 90 / (count - 1);

    styles += `
    &:nth-of-type(${i + 1}) {
      transform: rotate(${deg * i - 70}deg)
        translateX(80px)
        rotate(${-deg * i + 70}deg);
      transition-delay: ${0.1 * i}s;
    }
     `;
  }

  return css`
    ${styles}
  `;
}

const SBox = styled.div`
  ${sizeMixin('150px', '150px')};
  opacity: 0;
  border-radius: 50%;
  background-color: rgba(245, 245, 245, 0.5);
  position: absolute;
  top: 50%;
  right: -40%;
  transform: translate(-50%, -50%);
  transition-duration: 0.3s;
  z-index: 5;

  ${({ isOpen }) =>
    isOpen &&
    css`
      opacity: 1;

      div {
        left: 50px;
        ${createBoxItem(3)};
      }
    `}
`;

const SBoxItem = styled.div`
  ${sizeMixin('50px', '50px')};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.secondaryDarker};
  color: ${({ theme }) => theme.colors.greyLight};
  position: absolute;
  left: 18px;
  top: calc(75px - 50px / 2);
  box-shadow: 0 0 0.5rem ${({ theme }) => theme.colors.greyDark};
  //@include box-shadow();
  transition-duration: 0.3s;
  cursor: pointer;

  svg {
    fill: ${({ theme }) => theme.colors.greyLight};
    width: 30px;
    height: 30px;
    position: absolute;
    left: 10px; //calc((50px - 30px) / 2)
    top: 10px;
  }

  &:hover {
    transition-delay: initial !important;
    box-shadow: 0 0 5px 5px ${({ theme }) => theme.colors.greyDarker};
    background-color: ${({ theme }) => theme.colors.primary};

    svg {
      fill: ${({ theme }) => theme.colors.secondaryLighter};
    }
  }
`;

export { SCard, SBox, SBoxItem, SActionButton, SContent, SPhoto, SText, SRow };
