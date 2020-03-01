import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import './sign-in-form.scss';

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
    <div className="container">
      <h2>Вход</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={SignInValidation}
        onSubmit={handleSubmit}>
        <Form className="signIn-form">
          <div className="signIn-form__group">
            <Field name="email" type="email" placeholder="E-mail" />
            <ErrorMessage
              name="email"
              className="invalid-feedback"
              component="div"
            />
          </div>
          <div className="signIn-form__group">
            <Field name="password" type="password" placeholder="Пароль" />
            <ErrorMessage
              name="password"
              className="invalid-feedback"
              component="div"
            />
          </div>

          <button className="red-btn" type="submit">
            Войти
          </button>

          <Link to="/sign-up" className="signIn-form--link">
            Зарегистрироваться ⟶
          </Link>
        </Form>
      </Formik>
    </div>
  );
};

export default SignInForm;
