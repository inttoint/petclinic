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
  z-index: 200;
  left: calc((100% - 350px) / 2);
  top: calc((100% - 300px) / 2);
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
  margin-bottom: -10px;

  h3 {
    margin: 10px 0 10px 0;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: ${({ theme }) => theme.colors.secondaryDarker};
  }
`;

const ModalContent = styled.div`
  padding: 10px 20px;
  overflow: hidden;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    ${sizeMixin('calc(100% + 50px)', 'calc(100%)')};
    background-color: ${({ theme }) => theme.colors.grey};
    left: -25px;
    z-index: -2;
    transform: rotate(2deg);
  }
`;

const ModalContainer = styled(Container)`
  margin-top: 5px;
`;

export {
  Overlay,
  DefaultModalWrapper,
  CloseButton,
  ModalHeader,
  ModalContent,
  ModalContainer
};
