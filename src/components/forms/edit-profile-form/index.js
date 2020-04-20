import React from 'react';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import MaskedInput from 'react-text-mask';
import { SSaveButton, SEditProfileForm } from './edit-profile-form.styled';
import {
  SErrorInputMessage,
  SInput,
  SInputGroup
} from '../../common/input.styled';

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
        <SEditProfileForm>
          <h4>Изменить личные данные:</h4>
          <SInputGroup>
            <Field as={SInput} name="firstName" type="text" placeholder="Имя" />
            <SErrorInputMessage name="firstName" component="div" />
          </SInputGroup>
          <SInputGroup>
            <Field
              as={SInput}
              name="lastName"
              type="text"
              placeholder="Фамилия"
            />
            <SErrorInputMessage name="lastName" component="div" />
          </SInputGroup>
          <SInputGroup>
            <Field
              as={SInput}
              name="middleName"
              type="text"
              placeholder="Отчество"
            />
            <SErrorInputMessage name="middleName" component="div" />
          </SInputGroup>
          <SInputGroup>
            <Field name="phone">
              {({ field }) => (
                <MaskedInput
                  {...field}
                  placeholder="Номер телефона"
                  mask={phoneNumberMask}
                  type="text"
                  render={(ref, meta) => <SInput {...meta} ref={ref} />}
                />
              )}
            </Field>
            <SErrorInputMessage name="phone" component="div" />
          </SInputGroup>

          <SSaveButton disabled={!(isValid && dirty)}>Сохранить</SSaveButton>
        </SEditProfileForm>
      )}
    </Formik>
  );
};

export default EditProfileForm;
