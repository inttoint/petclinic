import styled from 'styled-components';
import { boxShadowMixin } from '../../../theme/mixins';

export const TableWrapper = styled.div`
  .ReactVirtualized__Table {
    font-size: 14px;
    //border: 1px solid white;
    //border-top: none;

    .ReactVirtualized__Grid.ReactVirtualized__Table__Grid {
      outline: none;
      padding: 0 10px;
    }
  }

  .ReactVirtualized__Table__headerColumn {
  }

  .ReactVirtualized__Table__headerRow {
    border: 1px solid white;
    ${boxShadowMixin};
    background: ${({ theme }) => theme.colors.secondaryMoreDarkness};
  }

  .ReactVirtualized__Table__row {
    border-bottom: 1px solid white;
    ${boxShadowMixin};

    :hover {
      cursor: pointer;
      background: linear-gradient(
        to right,
        ${({ theme }) => theme.colors.secondary} 5%,
        ${({ theme }) => theme.colors.secondaryMoreDarkness} 15%,
        ${({ theme }) => theme.colors.secondaryMoreDarkness} 80%,
        ${({ theme }) => theme.colors.secondary} 90%
      );
    }
  }

  .ReactVirtualized__Table__rowColumn {
    outline: none;
  }
`;