import React from 'react';
import './sign-up-form.scss';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

const signUpValidation = Yup.object({
  firstName: Yup.string().required('Поле должно быть заполнено'),
  lastName: Yup.string(),
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
    <div className="container">
      <h2>Регистрация</h2>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          passwordConfirm: ''
        }}
        validationSchema={signUpValidation}
        onSubmit={handleSubmit}>
        <Form className="signUp-form">
          <div className="signUp-form__group">
            <Field name="firstName" type="text" placeholder="Имя" />
            <ErrorMessage
              name="firstName"
              className="invalid-feedback"
              component="div"
            />
          </div>
          <div className="signUp-form__group">
            <Field name="lastName" type="text" placeholder="Фамилия" />
            <ErrorMessage
              name="lastName"
              className="invalid-feedback"
              component="div"
            />
          </div>
          <div className="signUp-form__group">
            <Field name="email" type="email" placeholder="E-mail" />
            <ErrorMessage
              name="email"
              className="invalid-feedback"
              component="div"
            />
          </div>
          <div className="signUp-form__group">
            <Field
              name="password"
              type="password"
              placeholder="Придумайте пароль"
            />
            <ErrorMessage
              name="password"
              className="invalid-feedback"
              component="div"
            />
          </div>
          <div className="signUp-form__group">
            <Field
              name="passwordConfirm"
              type="password"
              placeholder="Повторите пароль"
            />
            <ErrorMessage
              name="passwordConfirm"
              className="invalid-feedback"
              component="div"
            />
          </div>

          <button className="red-btn" type="submit">
            Регистрация
          </button>

          <Link to="/auth/sign-in" className="signUp-form--link">
            У меня уже есть аккаунт ⟶
          </Link>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUpForm;
