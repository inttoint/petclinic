import React from 'react';
import { ReactComponent as SearchIcon } from './paw.svg';
import { ReactComponent as RefreshIcon } from './refresh.svg';
import { ReactComponent as AddPetIcon } from './pawprint.svg';
import { PanelWrapper, SearchInput, SearchRow } from './panel.styled';
import { MiniButton } from '../../common/buttons/button.styled';

export const Panel = () => {
  return (
    <PanelWrapper>
      <SearchRow>
        <SearchIcon />
        <SearchInput placeholder="Кличка или описание питомца" />
      </SearchRow>

      <MiniButton width="auto">
        <AddPetIcon />
      </MiniButton>
      <MiniButton width="auto">
        <RefreshIcon />
      </MiniButton>
    </PanelWrapper>
  );
};
