import styled from 'styled-components';
import { boxShadowMixin } from '../../../theme/mixins';
import { ErrorMessage } from 'formik';

export const Input = styled.input`
  ${boxShadowMixin};

  width: 100%;
  padding: 16px;
  border-radius: 7px;
  border: none;
  background: rgba(33, 33, 33, 0.8);
  color: ${({ theme }) => theme.colors.grey};
  outline: none;

  &:focus {
    background-color: ${({ theme }) => theme.colors.primaryDarker};
    color: ${({ theme }) => theme.colors.grey};
  }
`;

export const ErrorInputMessage = styled(ErrorMessage)`
  padding-left: 16px;
  color: ${({ theme }) => theme.colors.secondaryLightest};
`;

export const InputGroup = styled.div`
  align-self: center;
  margin-bottom: 20px;
  width: 300px;
`;
