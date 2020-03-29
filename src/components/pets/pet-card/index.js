import React, { useState } from 'react';
import avatarCat from './img/Avatar_cat.png';
import avatarDog from './img/avatar_dog.jpg';
import { ReactComponent as SettingIcon } from './img/gear.svg';
import { ReactComponent as MedReportIcon } from './img/medical-history.svg';
import { ReactComponent as MedHelpIcon } from './img/syringe.svg';
import {
  Box,
  BoxItem,
  ActionButton,
  Card,
  Content,
  Photo,
  Row,
  Text
} from './pet-card.styled';

const PetCard = ({ pet: { name, description, age, type } }) => {
  const [isOpen, toggleCardActions] = useState(false);
  const avatar = type === 'Собака' ? avatarDog : avatarCat;

  return (
    <Card>
      <Photo>
        <img src={avatar} alt="" />
      </Photo>
      <Content>
        <Text>
          <Row>
            <h3>{name}</h3>
            <h6>{age}</h6>
          </Row>
          <h6>{description}</h6>
        </Text>
        <ActionButton
          isOpen={isOpen}
          onClick={() => toggleCardActions(!isOpen)}>
          <span />
        </ActionButton>
      </Content>
      <Box isOpen={isOpen}>
        <BoxItem>
          <MedHelpIcon />
        </BoxItem>
        <BoxItem>
          <MedReportIcon />
        </BoxItem>
        <BoxItem>
          <SettingIcon />
        </BoxItem>
      </Box>
    </Card>
  );
};

export default PetCard;
