import styled from 'styled-components';
import { boxShadowMixin } from '../../assets/theme/mixins';
import { ErrorMessage } from 'formik';

const SInput = styled.input`
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

  &[type='file'] {
    cursor: pointer;

    ::-webkit-file-upload-button {
      cursor: pointer;
    }
  }
`;

const SErrorInputMessage = styled(ErrorMessage)`
  padding-left: 16px;
  color: ${({ theme }) => theme.colors.secondaryLightest};
`;

const SInputGroup = styled.div`
  align-self: center;
  margin-bottom: 20px;
  width: 300px;
`;

export { SInput, SInputGroup, SErrorInputMessage };
