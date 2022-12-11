import React, { useState } from 'react';
import db from '../firebase';
import * as R from 'ramda';
import { Box, Button, Flex, ModalContext } from 'exsportia-components';
import { collection, getDocs, query } from 'firebase/firestore';
import { PersonalCard } from '../molecules/personal-card';
import { CreateEditPage } from './create-edit-modal';
///////////////////////////////////////////////////////////////

const allPersons = async () => {
  try {
    const personsRef = collection(db, 'persons');
    const allPersonsQ = query(personsRef);
    const allPersonsSnap = await getDocs(allPersonsQ);
    return Promise.resolve(allPersonsSnap.docs.map((doc) => doc.data()));
  } catch (e) {
    console.log(e);
  }
};

const genealogyTree = (persons) => {
  const oldGener = persons.filter((person) => {
    if (R.isEmpty(person.parents) || R.isNil(person.parents)) {
      const siblingsAndSpouses = [
        ...R.pathOr([], ['spouses'], person),
        ...R.pathOr([], ['siblings'], person),
      ];
      if (R.isEmpty(siblingsAndSpouses)) {
        return true;
      } else {
        const siblingsAndSpousesIds = siblingsAndSpouses.map((siblingOrSpouse) => siblingOrSpouse.uid);
        const siblingsAndSpousesPersons = persons.filter((sibl) => siblingsAndSpousesIds.includes(sibl.uid));
        const siblingsAndSpousesParents = siblingsAndSpousesPersons.map((person) => person.parents);
        if (R.isEmpty(siblingsAndSpousesParents) || R.isNil(siblingsAndSpousesParents)) {
          return true;
        }
      }
    }
    return false;
  });
  const oldGenerIds = oldGener.map((person) => person.uid);
  return oldGenerIds;
}


export const Main = () => {
  const { openModal } = React.useContext(ModalContext);
  const [persons, setPersons] = React.useState([]);
  useState(() => {
    allPersons().then((resp) => setPersons(resp));
  }, []);
  const oldGenerIds = genealogyTree(persons);
  const firstGener = oldGenerIds.map((person) => persons.find((pers) => pers.uid === person));
  return (
    <Flex flexDirection='column'>
      <Box width='max-content' position='fixed' right='0'>
        <Button
          text={`Додати члена сім'ї`}
          styleType='secondary'
          onClick={() => openModal({
            title: 'Додати члена сім\'ї',
            component: <CreateEditPage allPersons={persons} />,
            footerConfig: {
              disabled: true,
            },
            headerConfig: {
              disabled: true,
            }
          })} />
      </Box>
      <Flex justifyContent='center'>
        {firstGener.map((person) => (
          <PersonalCard
            key={person.uid}
            name={person.name}
            surname={person.surname}
            image={person.image}
          />
        ))}
      </Flex>
    </Flex>
  );
};