import React from 'react';
import * as R from 'ramda';
import db from '../firebase';
import { setDoc, doc } from 'firebase/firestore';
import { Flex, Form } from 'exsportia-components';
import { ModalContext } from 'exsportia-components';
/////////////////////////////////////

export const CreateEditPage = ({
  allPersons,
}) => {
  const { closeModal } = React.useContext(ModalContext);
  const onSubmit = async (values) => {
    console.log("🚀 ~ file: create-edit-modal.jsx:14 ~ onSubmit ~ values", values)
    const uid = Array.from({ length: 8 }, () => Math.floor(Math.random() * 10)).join('');
    const data = {
      ...values,
      uid,
    };
    const resp = await setDoc(
      doc(db, 'persons', uid),
      data,
    );
    Promise.all([resp]);
  };

  return (
    <Flex pb='16px'>
      <Form
        onSubmit={onSubmit}
        text='Нова людина'
        settings={{
          footer: {
            buttons: {
              submitButton: {
                text: 'Зберегти',
              },
              cancelButton: {
                text: 'Відмінити',
                onClick: closeModal
              },
            },
          }
        }}
        initialValues={{
          name: '',
          surname: '',
          image: '',
          sex: 'male'
        }}
        fields={[
          {
            label: 'Ім\'я',
            type: 'text',
            fieldType: 'text',
            input: {
              id: 'name',
              name: 'name',
            }
          },
          {
            type: 'text',
            label: 'Прізвище',
            fieldType: 'text',
            input: {
              id: 'surname',
              name: 'surname',
            }
          },
          {
            fieldType: 'media',
            label: 'Фото чи портрет',
            input: {
              id: 'image',
              name: 'image',
            }
          },
          {
            fieldType: 'selectInput',
            label: 'Стать',
            options: [
              {
                label: 'Чоловік',
                value: 'male',
              },
              {
                label: 'Жінка',
                value: 'female',
              }
            ],
            input: {
              id: 'sex',
              name: 'sex',
            }
          },
          {
            label: 'Батько',
            fieldType: 'selectInput',
            options: allPersons
              .filter((person) => R.equals(person.sex, 'male'))
              .map((person) => ({
                value: person.uid,
                label: `${person.name} ${person.surname}`,
              })),
            input: {
              id: 'father',
              name: 'father',
            },
          },
          {
            label: 'Мати',
            fieldType: 'selectInput',
            options: allPersons
              .filter((person) => R.equals(person.sex, 'female'))
              .map((person) => ({
                value: person.uid,
                label: `${person.name} ${person.surname}`,
              })),
            input: {
              id: 'mother',
              name: 'mother',
            },
          },
        ]}
      />
    </Flex>
  );
};