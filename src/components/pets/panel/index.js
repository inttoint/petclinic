import React, { useState } from 'react';
import { ReactComponent as SearchIcon } from '../../../assets/images/icons/search_paw.svg';
import { ReactComponent as RefreshIcon } from '../../../assets/images/icons/refresh_arrow.svg';
import { ReactComponent as AddPetIcon } from '../../../assets/images/icons/plus_in_paw.svg';
import { SPanelWrapper, SSearchInput, SSearchRow } from './panel.styled';
import { SMiniButtonWithIcon } from '../../common/button.styled';
import DefaultModal from '../../modals/default-modal';
import AddNewPetForm from '../../forms/add-new-pet-form';

export const Panel = () => {
  const [isModalOpen, toggleModal] = useState(false);
  return (
    <SPanelWrapper>
      <SSearchRow>
        <SearchIcon />
        <SSearchInput placeholder="Кличка или описание питомца" />
      </SSearchRow>

      <SMiniButtonWithIcon
        width="auto"
        onClick={() => toggleModal(!isModalOpen)}>
        <AddPetIcon />
      </SMiniButtonWithIcon>
      <SMiniButtonWithIcon width="auto">
        <RefreshIcon />
      </SMiniButtonWithIcon>

      <DefaultModal
        heading="Добавить питомца"
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}>
        <AddNewPetForm handleSubmit={() => {}} />
      </DefaultModal>
    </SPanelWrapper>
  );
};
