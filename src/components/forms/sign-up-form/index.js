import React from 'react';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { AuthContainer } from '../../common/containers.styled';
import { SignUpStyledForm } from './sign-up-form.styled';
import {
  ErrorInputMessage,
  Input,
  InputGroup
} from '../../common/inputs/input.styled';
import { PrimaryButton } from '../../common/buttons/button.styled';
import { WhiteLink } from '../../common/links/link.styled';

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
    <AuthContainer>
      <h2>Регистрация</h2>
      <Formik
        initialValues={{
          email: '',
          password: '',
          passwordConfirm: ''
        }}
        validationSchema={signUpValidation}
        onSubmit={handleSubmit}>
        <SignUpStyledForm>
          <InputGroup>
            <Field as={Input} name="email" type="email" placeholder="E-mail" />
            <ErrorInputMessage name="email" component="div" />
          </InputGroup>
          <InputGroup>
            <Field
              as={Input}
              name="password"
              type="password"
              placeholder="Придумайте пароль"
            />
            <ErrorInputMessage name="password" component="div" />
          </InputGroup>
          <InputGroup>
            <Field
              as={Input}
              name="passwordConfirm"
              type="password"
              placeholder="Повторите пароль"
            />
            <ErrorInputMessage name="passwordConfirm" component="div" />
          </InputGroup>

          <PrimaryButton type="submit">Регистрация</PrimaryButton>

          <WhiteLink to="/auth/sign-in">У меня уже есть аккаунт ⟶</WhiteLink>
        </SignUpStyledForm>
      </Formik>
    </AuthContainer>
  );
};

export default SignUpForm;
