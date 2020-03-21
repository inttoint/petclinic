import styled from 'styled-components';
import { Form } from 'formik';
import { PrimaryLink } from '../../common/links/link.styled';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;

  h4 {
    margin-top: -30px;
  }
`;

export const SaveButton = styled(PrimaryLink)`
  border-color: ${({ theme }) => theme.colors.secondaryMoreDarkness};
  margin: 0 auto 20px;
  display: inline-block;
`;
