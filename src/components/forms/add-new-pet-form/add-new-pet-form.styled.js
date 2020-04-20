import styled from 'styled-components';
import { Form } from 'formik';

const SAddNewPetForm = styled(Form)`
  display: flex;
  flex-direction: column;

  button {
    margin-bottom: 15px;
  }
`;

export { SAddNewPetForm };
