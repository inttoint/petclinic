import React from 'react';
import './edit-profile-form.scss';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import MaskedInput from 'react-text-mask';
import { SaveButton, StyledForm } from './edit-profile-form.styled';
import {
  ErrorInputMessage,
  Input,
  InputGroup
} from '../../common/inputs/input.styled';
import { SecondaryLink } from '../../common/links/link.styled';

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
          <StyledForm>
            <h4>Изменить личные данные:</h4>
            <InputGroup>
              <Field
                as={Input}
                name="firstName"
                type="text"
                placeholder="Имя"
              />
              <ErrorInputMessage name="firstName" component="div" />
            </InputGroup>
            <InputGroup>
              <Field
                as={Input}
                name="lastName"
                type="text"
                placeholder="Фамилия"
              />
              <ErrorInputMessage name="lastName" component="div" />
            </InputGroup>
            <InputGroup>
              <Field
                as={Input}
                name="middleName"
                type="text"
                placeholder="Отчество"
              />
              <ErrorInputMessage name="middleName" component="div" />
            </InputGroup>
            <InputGroup>
              <Field name="phone">
                {({ field }) => (
                  <MaskedInput
                    {...field}
                    placeholder="Номер телефона"
                    mask={phoneNumberMask}
                    type="text"
                    render={(ref, meta) => <Input {...meta} ref={ref} />}
                  />
                )}
              </Field>
              <ErrorInputMessage name="phone" component="div" />
            </InputGroup>

            <SaveButton as="button" disabled={!(isValid && dirty)}>
              Сохранить
            </SaveButton>
          </StyledForm>
        )}
      </Formik>
    </div>
  );
};

export default EditProfileForm;
