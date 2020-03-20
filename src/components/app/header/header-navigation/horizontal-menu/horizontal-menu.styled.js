import styled from 'styled-components';

export const HeaderMenu = styled.nav`
  margin-left: auto;

  ul {
    margin: 0;
    padding-right: 50px;
    display: flex;
    align-items: center;

    li {
      display: inline-block;
    }
  }

  @media (max-width: 800px) {
    display: none;
  }
`;
