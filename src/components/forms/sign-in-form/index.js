import React from 'react';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import {
  ErrorInputMessage,
  Input,
  InputGroup
} from '../../common/inputs/input.styled';
import { SignInStyledForm } from './sign-in-form.styled';
import { PrimaryButton } from '../../common/buttons/button.styled';
import { WhiteLink } from '../../common/links/link.styled';
import { AuthContainer } from '../../common/containers.styled';

const SignInValidation = Yup.object({
  email: Yup.string()
    .email('Введён некорректный email')
    .required('Поле должно быть заполнено'),
  password: Yup.string()
    .min(6, 'Минимальная длина пароля - 6 символов')
    .required('Поле должно быть заполнено')
});

const SignInForm = ({ handleSubmit }) => {
  return (
    <AuthContainer>
      <h2>Вход</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={SignInValidation}
        onSubmit={handleSubmit}>
        <SignInStyledForm>
          <InputGroup>
            <Field as={Input} name="email" type="email" placeholder="E-mail" />
            <ErrorInputMessage name="email" component="div" />
          </InputGroup>
          <InputGroup>
            <Field
              as={Input}
              name="password"
              type="password"
              placeholder="Пароль"
            />
            <ErrorInputMessage name="password" component="div" />
          </InputGroup>

          <PrimaryButton type="submit">Войти</PrimaryButton>

          <WhiteLink to="/auth/sign-up">Зарегистрироваться ⟶</WhiteLink>
        </SignInStyledForm>
      </Formik>
    </AuthContainer>
  );
};

export default SignInForm;
