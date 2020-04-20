import styled from 'styled-components';
import { Form } from 'formik';
import { SButton } from '../../common/button.styled';

const SEditProfileForm = styled(Form)`
  display: flex;
  flex-direction: column;

  h4 {
    margin-top: 0;
  }
`;

const SSaveButton = styled(SButton)`
  border-color: ${({ theme }) => theme.colors.secondaryMoreDarkness};
  margin: 0 auto 20px;
`;

export { SEditProfileForm, SSaveButton };
