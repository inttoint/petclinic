import React from 'react';
import { SBurgerButton } from './burger.styled';

/* ToDo: 1. Кликнуть на бургер. 2. Открыть окно в полный экран. 3. Починить исчезающий крестик */

const Burger = ({ isOpen, toggleSidebar }) => {
  return (
    <SBurgerButton isOpen={isOpen} onClick={() => toggleSidebar(!isOpen)}>
      <span />
      <span />
      <span />
    </SBurgerButton>
  );
};

export default Burger;
