import React from 'react';
import { BurgerButton } from './burger.styled';

/* ToDo: 1. Кликнуть на бургер. 2. Открыть окно в полный экран. 3. Починить исчезающий крестик */

const Burger = ({ isOpen, toggleSidebar }) => {
  return (
    <BurgerButton isOpen={isOpen} onClick={() => toggleSidebar(!isOpen)}>
      <span />
      <span />
      <span />
    </BurgerButton>
  );
};

export default Burger;
