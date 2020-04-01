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
  transition: all 300ms ease-in-out;

  &:focus {
    background-color: ${({ theme }) => theme.colors.primaryDarker};
    color: ${({ theme }) => theme.colors.grey};
  }

  &[type='date']::-webkit-inner-spin-button {
    display: none;
  }

  &[type='date']::-webkit-calendar-picker-indicator {
    opacity: 1;

    &:hover {
      background: none;
      cursor: pointer;
    }
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
