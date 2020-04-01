import React, { useState } from 'react';
import { ReactComponent as SearchIcon } from './paw.svg';
import { ReactComponent as RefreshIcon } from './refresh.svg';
import { ReactComponent as AddPetIcon } from './pawprint.svg';
import { PanelWrapper, SearchInput, SearchRow } from './panel.styled';
import { MiniButton } from '../../common/buttons/button.styled';
import DefaultModal from '../../modals/default-modal';
import AddNewPetForm from '../../forms/add-new-pet-form';

export const Panel = () => {
  const [isModalOpen, toggleModal] = useState(true);
  return (
    <PanelWrapper>
      <SearchRow>
        <SearchIcon />
        <SearchInput placeholder="Кличка или описание питомца" />
      </SearchRow>

      <MiniButton width="auto" onClick={() => toggleModal(!isModalOpen)}>
        <AddPetIcon />
      </MiniButton>
      <MiniButton width="auto">
        <RefreshIcon />
      </MiniButton>

      <DefaultModal
        heading="Добавить питомца"
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}>
        <AddNewPetForm handleSubmit={() => {}} />
      </DefaultModal>
    </PanelWrapper>
  );
};
