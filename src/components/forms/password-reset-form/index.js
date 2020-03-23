import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const PasswordResetForm = ({ handleSubmit }) => {
  const passwordResetValidation = Yup.object({
    password: Yup.string().min(6, 'Минимальная длина пароля - 6 символов'),
    passwordConfirm: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Пароли не совпадают'
    )
  });

  return (
    <div className="">
      <Formik
        initialValues={{
          password: '',
          passwordConfirm: ''
        }}
        validationSchema={passwordResetValidation}
        onSubmit={handleSubmit}>
        {({ isValid, dirty }) => (
          <Form className="password-reset-form">
            <h4>Изменить пароль:</h4>
            <div className="password-reset-form__group">
              <Field
                name="password"
                type="password"
                placeholder="Новый пароль"
              />
              <ErrorMessage
                name="password"
                className="invalid-feedback"
                component="div"
              />
            </div>
            <div className="password-reset-form__group">
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

            <button
              className="btn save"
              type="submit"
              disabled={!(isValid && dirty)}>
              Сохранить
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PasswordResetForm;
