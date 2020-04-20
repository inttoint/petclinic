import React from 'react';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { SAuthContainer } from '../../common/containers.styled';
import { SSignUpForm } from './sign-up-form.styled';
import {
  SErrorInputMessage,
  SInput,
  SInputGroup
} from '../../common/input.styled';
import { SButton } from '../../common/button.styled';
import { SWhiteLink } from '../../common/link.styled';

const signUpValidation = Yup.object({
  email: Yup.string()
    .email('Введён некорректный email')
    .required('Поле должно быть заполнено'),
  password: Yup.string()
    .min(6, 'Минимальная длина пароля - 6 символов')
    .required('Поле должно быть заполнено'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Пароли не совпадают')
    .required('Поле должно быть заполнено')
});

const SignUpForm = ({ handleSubmit }) => {
  return (
    <SAuthContainer>
      <h2>Регистрация</h2>
      <Formik
        initialValues={{
          email: '',
          password: '',
          passwordConfirm: ''
        }}
        validationSchema={signUpValidation}
        onSubmit={handleSubmit}>
        <SSignUpForm>
          <SInputGroup>
            <Field as={SInput} name="email" type="email" placeholder="E-mail" />
            <SErrorInputMessage name="email" component="div" />
          </SInputGroup>
          <SInputGroup>
            <Field
              as={SInput}
              name="password"
              type="password"
              placeholder="Придумайте пароль"
            />
            <SErrorInputMessage name="password" component="div" />
          </SInputGroup>
          <SInputGroup>
            <Field
              as={SInput}
              name="passwordConfirm"
              type="password"
              placeholder="Повторите пароль"
            />
            <SErrorInputMessage name="passwordConfirm" component="div" />
          </SInputGroup>

          <SButton type="submit">Регистрация</SButton>

          <SWhiteLink to="/auth/sign-in">У меня уже есть аккаунт ⟶</SWhiteLink>
        </SSignUpForm>
      </Formik>
    </SAuthContainer>
  );
};

export default SignUpForm;
