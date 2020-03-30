import React, { useState } from 'react';
import Portal from '../portal';
import { ReactComponent as CloseIcon } from './close.svg';
import {
  CloseButton,
  DefaultModalWrapper,
  ModalCloseBtn,
  ModalContent,
  ModalHeader,
  ModalRow,
  ModalToggleBtn,
  Overlay
} from './default-modal.styled';
import { MiniButton } from '../../common/buttons/button.styled';
import { Row } from '../../pets/pet-card/pet-card.styled';

const DefaultModal = () => {
  const [isModalOpen, toggleModal] = useState(true);

  return (
    <div>
      <ModalToggleBtn onClick={() => toggleModal(!isModalOpen)}>
        {!isModalOpen ? 'Open Modal' : 'Close Modal'}
      </ModalToggleBtn>

      {isModalOpen ? (
        <Overlay>
          <Portal>
            <DefaultModalWrapper>
              <CloseButton
                width="auto"
                onClick={() => toggleModal(!isModalOpen)}>
                <CloseIcon />
              </CloseButton>
              <ModalHeader>
                <h3>Heading</h3>
              </ModalHeader>

              <ModalContent>
                <p>Lorem ipsum </p>
              </ModalContent>
            </DefaultModalWrapper>
          </Portal>
        </Overlay>
      ) : null}
    </div>
  );
};

export default DefaultModal;
