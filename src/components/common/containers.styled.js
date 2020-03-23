import styled from 'styled-components';
import { flexCenteredContainer } from '../../theme/mixins';

const AuthContainer = styled.div`
  ${flexCenteredContainer};
  z-index: 1;

  h2 {
    margin-top: 0;
    color: ${({ theme }) => theme.colors.grey};
    text-shadow: 2px 2px 2px ${({ theme }) => theme.colors.primary};
  }
`;

export { AuthContainer };
