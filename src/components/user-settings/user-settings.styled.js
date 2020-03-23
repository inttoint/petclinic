import styled from 'styled-components';
import { Button } from '../common/buttons/button.styled';

const SignOutButton = styled(Button)`
  border-color: ${({ theme }) => theme.colors.secondaryMoreDarkness};
  background-color: ${({ theme }) => theme.colors.primary};
`;

export { SignOutButton };
