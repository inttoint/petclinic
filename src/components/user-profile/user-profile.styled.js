import styled from 'styled-components';
import { device } from '../../assets/theme/theme';

const SWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${device.tablet}) {
    flex-direction: column-reverse;
  }
`;

const SLeftColumn = styled.div`
  flex: 1;
  width: 100%;
  //padding: 20px 40px 60px 30px;
  position: relative;
  z-index: 1;

  box-shadow: 9px 0 5px 0 rgba(0, 0, 0, 0.03);
  border-right: 1px solid ${({ theme }) => theme.colors.secondaryMoreDarkness};

  @media (max-width: ${device.tablet}) {
    box-shadow: none;
  }
`;

const SRightColumn = styled.div`
  flex: 1;
  width: 100%;
  align-self: center;
  padding: 15px 0;
`;

const SOuterShadow = styled.div`
  box-shadow: 10px 10px 5px 0 rgba(0, 0, 0, 0.03);
`;

export { SWrapper, SLeftColumn, SRightColumn, SOuterShadow };
