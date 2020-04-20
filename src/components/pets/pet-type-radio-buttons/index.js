import React from 'react';
import {
  SInputContainer,
  SOptions,
  SRadioTile
} from './pet-type-radio-buttons.styled';
import { ReactComponent as Cat } from '../../../assets/images/icons/cat_type.svg';
import { ReactComponent as Dog } from '../../../assets/images/icons/dog_type.svg';

const PetTypeRadioButtons = () => {
  return (
    <SOptions>
      <SInputContainer>
        <input type="radio" name="type" id="cat" value="cat" defaultChecked />
        <SRadioTile htmlFor="cat">
          <Cat />
        </SRadioTile>
      </SInputContainer>

      <SInputContainer>
        <input type="radio" name="type" id="dog" value="dog" />
        <SRadioTile htmlFor="dog">
          <Dog />
        </SRadioTile>
      </SInputContainer>
    </SOptions>
  );
};

export default PetTypeRadioButtons;
