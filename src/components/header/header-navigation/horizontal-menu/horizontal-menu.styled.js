import styled from 'styled-components';

export const SHeaderMenu = styled.nav`
  margin-left: auto;

  ul {
    margin: 0;
    padding-right: 50px;
    display: flex;
    align-items: center;

    li {
      display: inline-block;
      padding: 5px 20px 5px 0;
    }
  }

  @media (max-width: 800px) {
    display: none;
  }
`;
