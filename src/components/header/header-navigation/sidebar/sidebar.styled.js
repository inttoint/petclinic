import styled from 'styled-components';

const SSidebarContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  min-height: 500px;
  top: 0;
  left: 0;
  font-size: 18px;
  background-color: rgb(51, 51, 51, 0.995); //Primary color
  z-index: 96;
  opacity: ${({ isOpen }) => +isOpen};
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const SSidebarMenu = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;

    li {
      display: block;
      padding: 15px;
    }
  }
`;

export { SSidebarMenu, SSidebarContainer };
