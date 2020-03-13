import React from 'react';
import './edit-profile-form.scss';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import MaskedInput from 'react-text-mask';

const EditProfileForm = ({ handleSubmit, details }) => {
  const phoneNumberMask = [
    '(',
    /[1-9]/,
    /\d/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/
  ];

  const editProfileValidation = Yup.object({
    firstName: Yup.string(),
    lastName: Yup.string(),
    middleName: Yup.string(),
    phone: Yup.string().test('isCorrect', 'Номер введен некорректно', function(
      value
    ) {
      return !(value && value.includes('_'));
    }),
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
          firstName: details.get('firstName') || '',
          lastName: details.get('lastName') || '',
          middleName: details.get('middleName') || '',
          phone: details.get('phone') || '',
          password: '',
          passwordConfirm: ''
        }}
        validationSchema={editProfileValidation}
        onSubmit={handleSubmit}>
        {({ isValid, dirty }) => (
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
            <div className="edit-profile-form__group">
              <Field name="middleName" type="text" placeholder="Отчество" />
              <ErrorMessage
                name="middleName"
                className="invalid-feedback"
                component="div"
              />
            </div>
            <div className="edit-profile-form__group">
              <Field name="phone">
                {({ field }) => (
                  <MaskedInput
                    {...field}
                    placeholder="Номер телефона"
                    mask={phoneNumberMask}
                    type="text"
                  />
                )}
              </Field>
              <ErrorMessage
                name="phone"
                className="invalid-feedback"
                component="div"
              />
            </div>

            {/*<h4>Изменить пароль:</h4>*/}
            {/*<div className="edit-profile-form__group">*/}
            {/*  <Field*/}
            {/*    name="password"*/}
            {/*    type="password"*/}
            {/*    placeholder="Новый пароль"*/}
            {/*  />*/}
            {/*  <ErrorMessage*/}
            {/*    name="password"*/}
            {/*    className="invalid-feedback"*/}
            {/*    component="div"*/}
            {/*  />*/}
            {/*</div>*/}
            {/*<div className="edit-profile-form__group">*/}
            {/*  <Field*/}
            {/*    name="passwordConfirm"*/}
            {/*    type="password"*/}
            {/*    placeholder="Повторите пароль"*/}
            {/*  />*/}
            {/*  <ErrorMessage*/}
            {/*    name="passwordConfirm"*/}
            {/*    className="invalid-feedback"*/}
            {/*    component="div"*/}
            {/*  />*/}
            {/*</div>*/}

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

export default EditProfileForm;
