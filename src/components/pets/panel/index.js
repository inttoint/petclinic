import React from 'react';
import { ReactComponent as SearchIcon } from './paw.svg';
import { ReactComponent as RefreshIcon } from './refresh.svg';
import { ReactComponent as AddPetIcon } from './pawprint.svg';
import {
  MiniButton,
  PanelWrapper,
  SearchInput,
  SearchRow
} from './panel.styled';

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
