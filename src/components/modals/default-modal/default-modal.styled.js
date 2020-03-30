import styled from 'styled-components';
import { boxShadowMixin, sizeMixin } from '../../../theme/mixins';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 199;
`;

const DefaultModalWrapper = styled.div`
  ${boxShadowMixin};
  background: ${({ theme }) => theme.colors.greyDark};
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  ${sizeMixin('300px', '300px')};
  z-index: 200;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 14px;
  cursor: pointer;
  border: none;
  background: none;
  outline: none;

  svg {
    ${sizeMixin('15px', '15px')};
    fill: ${({ theme }) => theme.colors.greyDarkest};
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colors.greyDarker};
  width: 100%;

  h3 {
    margin: 10px 0 10px 0;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    color: ${({ theme }) => theme.colors.greyDarkest};
  }
`;
const ModalContent = styled.div`
  padding: 10px;
`;

const ModalToggleBtn = styled.button`
  cursor: pointer;
  background-color: red;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 20px;

  &:focus {
    outline: none;
  }
`;

export {
  Overlay,
  DefaultModalWrapper,
  CloseButton,
  ModalToggleBtn,
  ModalHeader,
  ModalContent
};
