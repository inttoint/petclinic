import React from 'react';
import './burger.scss';

/* ToDo: 1. Кликнуть на бургер. 2. Открыть окно в полный экран. 3. Починить исчезающий крестик */

const Burger = ({ isOpen, toggleSidebar }) => {
  return (
    <button className="header__burger" onClick={() => toggleSidebar(!isOpen)}>
      <span style={{ transform: isOpen ? 'rotate(35deg)' : 'rotate(0)' }} />
      <span
        style={{
          opacity: isOpen ? '0' : '1',
          transform: isOpen ? 'translateX(10px)' : 'translateX(0px)'
        }}
      />
      <span style={{ transform: isOpen ? 'rotate(-35deg)' : 'rotate(0)' }} />
    </button>
  );
};

export default Burger;
