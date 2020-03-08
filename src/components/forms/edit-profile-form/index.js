import React from 'react';
import './edit-profile-form.scss';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const EditProfileForm = ({ handleSubmit = () => {} }) => {
  const editProfileValidation = Yup.object({
    firstName: Yup.string(),
    lastName: Yup.string(),
    password: Yup.string().min(6, 'Минимальная длина пароля - 6 символов'),
    passwordConfirm: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Пароли не совпадают'
    )
  });

  return (
    <div className="edit-profile">
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          password: '',
          passwordConfirm: ''
        }}
        validationSchema={editProfileValidation}
        onSubmit={handleSubmit}>
        <Form className="edit-profile-form">
          <h4>Изменить личные данные:</h4>
          <div className="edit-profile-form__group">
            <Field name="firstName" type="text" placeholder="Имя" />
            <ErrorMessage
              name="firstName"
              className="invalid-feedback"
              component="div"
            />
          </div>
          <div className="edit-profile-form__group">
            <Field name="lastName" type="text" placeholder="Фамилия" />
            <ErrorMessage
              name="lastName"
              className="invalid-feedback"
              component="div"
            />
          </div>

          <h4>Изменить пароль:</h4>
          <div className="edit-profile-form__group">
            <Field name="password" type="password" placeholder="Новый пароль" />
            <ErrorMessage
              name="password"
              className="invalid-feedback"
              component="div"
            />
          </div>
          <div className="edit-profile-form__group">
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

          <button className="btn save" type="submit">
            Сохранить
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default EditProfileForm;
