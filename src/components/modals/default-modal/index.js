import React from 'react';
import Portal from '../portal';
import { ReactComponent as CloseIcon } from './close.svg';
import {
  CloseButton,
  DefaultModalWrapper,
  ModalContainer,
  ModalContent,
  ModalHeader,
  Overlay
} from './default-modal.styled';

const DefaultModal = ({ heading, children, isModalOpen, toggleModal }) => {
  return (
    <div>
      {isModalOpen ? (
        <Overlay>
          <Portal>
            <DefaultModalWrapper>
              <ModalHeader>
                <h3>{heading}</h3>
                <CloseButton
                  width="auto"
                  onClick={() => toggleModal(!isModalOpen)}>
                  <CloseIcon />
                </CloseButton>
              </ModalHeader>

              <ModalContent>
                <ModalContainer>{children}</ModalContainer>
              </ModalContent>
            </DefaultModalWrapper>
          </Portal>
        </Overlay>
      ) : null}
    </div>
  );
};

export default DefaultModal;
