import styled from 'styled-components';
import { Form } from 'formik';
import { Button } from '../../common/buttons/button.styled';

const EditProfileStyledForm = styled(Form)`
  display: flex;
  flex-direction: column;

  h4 {
    margin-top: 0;
  }
`;

const SaveButton = styled(Button)`
  border-color: ${({ theme }) => theme.colors.secondaryMoreDarkness};
  margin: 0 auto 20px;
`;

export { EditProfileStyledForm, SaveButton };
