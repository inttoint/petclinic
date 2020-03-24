import styled from 'styled-components';
import { Container } from '../common/containers.styled';
import { device } from '../../theme';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${device.tablet}) {
    flex-direction: column-reverse;
  }
`;

const LeftColumn = styled.div`
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

const RightColumn = styled.div`
  flex: 1;
  width: 100%;
  align-self: center;
  padding: 15px 0;
`;

const OuterShadow = styled.div`
  box-shadow: 10px 10px 5px 0 rgba(0, 0, 0, 0.03);
`;

export { Wrapper, LeftColumn, RightColumn, OuterShadow };
