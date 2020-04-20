import React from 'react';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import {
  SErrorInputMessage,
  SInput,
  SInputGroup
} from '../../common/input.styled';
import { SSignInForm } from './sign-in-form.styled';
import { SButton } from '../../common/button.styled';
import { SWhiteLink } from '../../common/link.styled';
import { SAuthContainer } from '../../common/containers.styled';

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
    <SAuthContainer>
      <h2>Вход</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={SignInValidation}
        onSubmit={handleSubmit}>
        <SSignInForm>
          <SInputGroup>
            <Field as={SInput} name="email" type="email" placeholder="E-mail" />
            <SErrorInputMessage name="email" component="div" />
          </SInputGroup>
          <SInputGroup>
            <Field
              as={SInput}
              name="password"
              type="password"
              placeholder="Пароль"
            />
            <SErrorInputMessage name="password" component="div" />
          </SInputGroup>

          <SButton type="submit">Войти</SButton>

          <SWhiteLink to="/auth/sign-up">Зарегистрироваться ⟶</SWhiteLink>
        </SSignInForm>
      </Formik>
    </SAuthContainer>
  );
};

export default SignInForm;
