import React from 'react';
import { AddNewPetStyledForm } from './add-new-pet-form.styled';
import { Field, Formik } from 'formik';
import {
  ErrorInputMessage,
  Input,
  InputGroup
} from '../../common/inputs/input.styled';
import { Button } from '../../common/buttons/button.styled';
import PetTypeRadioButtons from '../../pets/pet-type-radio-buttons';

const AddNewPetForm = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '', description: '', birthday: '', type: '' }}
      onSubmit={handleSubmit}>
      <AddNewPetStyledForm>
        <PetTypeRadioButtons />

        <InputGroup>
          <Field as={Input} name="name" type="text" placeholder="Кличка" />
          <ErrorInputMessage name="name" component="div" />
        </InputGroup>
        <InputGroup>
          <Field
            as={Input}
            name="description"
            type="text"
            placeholder="Описание"
          />
          <ErrorInputMessage name="description" component="div" />
        </InputGroup>
        <InputGroup>
          <Field
            as={Input}
            name="birthday"
            type="date"
            placeholder="Дата рождения"
          />
          <ErrorInputMessage name="birthday" component="div" />
        </InputGroup>
        <InputGroup>
          <Field
            as={Input}
            name="photo"
            id="photo"
            type="file"
            placeholder="Изображение"
          />
          <label htmlFor="photo">Выбрать изображение</label>
          <ErrorInputMessage name="photo" component="div" />
        </InputGroup>

        <Button type="submit">Сохранить</Button>
      </AddNewPetStyledForm>
    </Formik>
  );
};

export default AddNewPetForm;
