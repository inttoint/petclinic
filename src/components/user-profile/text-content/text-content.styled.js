import styled from 'styled-components';
import { SContainer } from '../../common/containers.styled';

export const STextContentWrapper = styled(SContainer)`
  align-items: start;

  h4 {
    margin-top: 0;
    font-size: 24px;
    padding-top: 20px;
    color: ${({ theme }) => theme.colors.greyLight};
  }

  p {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.grey};
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
