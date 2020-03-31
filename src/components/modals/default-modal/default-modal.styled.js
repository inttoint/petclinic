import styled from 'styled-components';
import { boxShadowMixin, sizeMixin } from '../../../theme/mixins';
import { Container } from '../../common/containers.styled';

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
  ${sizeMixin('350px', '300px')};
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
  z-index: 1;

  svg {
    ${sizeMixin('15px', '15px')};
    fill: ${({ theme }) => theme.colors.secondaryDarker};
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  h3 {
    margin: 10px 0 10px 0;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: ${({ theme }) => theme.colors.greyDarkest};
  }
`;

const ModalContent = styled.div`
  padding: 10px;
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  &:before {
    content: '';
    position: absolute;
    ${sizeMixin('calc(100% + 50px)', 'calc(100%)')};
    background-color: ${({ theme }) => theme.colors.grey};
    left: -25px;
    top: 50px;
    z-index: -2;
    transform: rotate(2deg);
  }
`;

const ModalContainer = styled(Container)`
  margin-top: 55px;
`;

export {
  Overlay,
  DefaultModalWrapper,
  CloseButton,
  ModalHeader,
  ModalContent,
  ModalContainer
};
