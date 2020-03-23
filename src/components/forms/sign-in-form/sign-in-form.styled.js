import styled from 'styled-components';
import { Form } from 'formik';

const SignInStyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  //width: 350px;
`;

const Container = styled.div`
  padding: 2% 6%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;

  h2 {
    margin-top: 0;
    color: ${({ theme }) => theme.colors.grey};
    text-shadow: 2px 2px 2px ${({ theme }) => theme.colors.primary};
  }
`;

export { SignInStyledForm, Container };
