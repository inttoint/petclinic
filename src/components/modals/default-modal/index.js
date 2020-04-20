import React from 'react';
import Portal from '../portal';
import { ReactComponent as CloseIcon } from '../../../assets/images/icons/close.svg';
import {
  SCloseButton,
  SDefaultModalWrapper,
  SModalContent,
  SModalHeader,
  SOverlay
} from './default-modal.styled';
import { SContainer } from '../../common/containers.styled';

const DefaultModal = ({ heading, children, isModalOpen, toggleModal }) => {
  return (
    <div>
      {isModalOpen ? (
        <SOverlay>
          <Portal>
            <SDefaultModalWrapper width="350px" height="470px">
              <SModalHeader>
                <h3>{heading}</h3>
                <SCloseButton
                  width="auto"
                  onClick={() => toggleModal(!isModalOpen)}>
                  <CloseIcon />
                </SCloseButton>
              </SModalHeader>

              <SModalContent>
                <SContainer>{children}</SContainer>
              </SModalContent>
            </SDefaultModalWrapper>
          </Portal>
        </SOverlay>
      ) : null}
    </div>
  );
};

export default DefaultModal;
