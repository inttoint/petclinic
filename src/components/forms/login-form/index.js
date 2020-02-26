import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';

const LoginForm = () => {
  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={() => {}}>
      <Form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <Field name="email" type="email" />
          <ErrorMessage
            name="email"
            className="invalid-feedback"
            component="div"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Пароль:</label>
          <Field name="password" type="password" />
          <ErrorMessage
            name="password"
            className="invalid-feedback"
            component="div"
          />
        </div>

        <button type="submit">Войти</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
