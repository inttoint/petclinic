import React from 'react';
import { SAddNewPetForm } from './add-new-pet-form.styled';
import { Field, Formik } from 'formik';
import {
  SErrorInputMessage,
  SInput,
  SInputGroup
} from '../../common/input.styled';
import { SButton } from '../../common/button.styled';
import PetTypeRadioButtons from '../../pets/pet-type-radio-buttons';

const AddNewPetForm = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '', description: '', birthday: '', type: '' }}
      onSubmit={handleSubmit}>
      <SAddNewPetForm>
        <PetTypeRadioButtons />

        <SInputGroup>
          <Field as={SInput} name="name" type="text" placeholder="Кличка" />
          <SErrorInputMessage name="name" component="div" />
        </SInputGroup>
        <SInputGroup>
          <Field
            as={SInput}
            name="description"
            type="text"
            placeholder="Описание"
          />
          <SErrorInputMessage name="description" component="div" />
        </SInputGroup>
        <SInputGroup>
          <Field
            as={SInput}
            name="birthday"
            type="date"
            placeholder="Дата рождения"
          />
          <SErrorInputMessage name="birthday" component="div" />
        </SInputGroup>
        <SInputGroup>
          <Field
            as={SInput}
            name="photo"
            id="photo"
            type="file"
            placeholder="Изображение"
          />
          <label htmlFor="photo">Выбрать изображение</label>
          <SErrorInputMessage name="photo" component="div" />
        </SInputGroup>

        <SButton type="submit">Сохранить</SButton>
      </SAddNewPetForm>
    </Formik>
  );
};

export default AddNewPetForm;
