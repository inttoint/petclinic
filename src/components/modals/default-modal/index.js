import React from 'react';
import Portal from '../portal';
import { ReactComponent as CloseIcon } from '../../../assets/images/icons/close.svg';
import {
  CloseButton,
  DefaultModalWrapper,
  ModalContent,
  ModalHeader,
  Overlay
} from './default-modal.styled';
import { Container } from '../../common/containers.styled';

const DefaultModal = ({ heading, children, isModalOpen, toggleModal }) => {
  return (
    <div>
      {isModalOpen ? (
        <Overlay>
          <Portal>
            <DefaultModalWrapper width="350px" height="470px">
              <ModalHeader>
                <h3>{heading}</h3>
                <CloseButton
                  width="auto"
                  onClick={() => toggleModal(!isModalOpen)}>
                  <CloseIcon />
                </CloseButton>
              </ModalHeader>

              <ModalContent>
                <Container>{children}</Container>
              </ModalContent>
            </DefaultModalWrapper>
          </Portal>
        </Overlay>
      ) : null}
    </div>
  );
};

export default DefaultModal;
