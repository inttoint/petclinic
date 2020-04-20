import React, { useState } from 'react';
import avatarCat from '../../../assets/images/avatar_cat.png';
import avatarDog from '../../../assets/images/avatar_dog.jpg';
import { ReactComponent as SettingIcon } from '../../../assets/images/icons/edit_settings.svg';
import { ReactComponent as MedReportIcon } from '../../../assets/images/icons/medical-history.svg';
import { ReactComponent as MedHelpIcon } from '../../../assets/images/icons/syringe.svg';
import {
  SBox,
  SBoxItem,
  SActionButton,
  SCard,
  SContent,
  SPhoto,
  SRow,
  SText
} from './pet-card.styled';

const PetCard = ({ pet: { name, description, age, type } }) => {
  const [isOpen, toggleCardActions] = useState(false);
  const avatar = type === 'Собака' ? avatarDog : avatarCat;

  return (
    <SCard>
      <SPhoto>
        <img src={avatar} alt="" />
      </SPhoto>
      <SContent>
        <SText>
          <SRow>
            <h3>{name}</h3>
            <h6>{age}</h6>
          </SRow>
          <h6>{description}</h6>
        </SText>
        <SActionButton
          isOpen={isOpen}
          onClick={() => toggleCardActions(!isOpen)}>
          <span />
        </SActionButton>
      </SContent>
      <SBox isOpen={isOpen}>
        <SBoxItem>
          <MedHelpIcon />
        </SBoxItem>
        <SBoxItem>
          <MedReportIcon />
        </SBoxItem>
        <SBoxItem>
          <SettingIcon />
        </SBoxItem>
      </SBox>
    </SCard>
  );
};

export default PetCard;
