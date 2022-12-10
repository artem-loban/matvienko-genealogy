import React from 'react';
import db from '../firebase';
import { Flex, MediaCard, Text } from 'exsportia-components';
import { collection, getDoc, doc } from "firebase/firestore";
/////////////////////////////////////////////////////////////////

const person = async () => {
  try {
    const response = await getDoc(doc(db, 'persons', '00000000'));
    const person = response.data();
    console.log(person);
  } catch (error) {
    console.log(error);
  }
}

export const PersonalCard = ({
  settings,
  name = 'name',
  surname = 'surname',
  fathersName = 'fathersName',
  image = 'https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-avatar-placeholder-png-image_3416697.jpg',
}) => {
  person();
  return (
    <Flex width='150px' height='200px' flexDirection='column' alignItems='center' justifyContent='center' bg='white' borderRadius='10px' boxShadow='0 0 10px 0 rgba(0, 0, 0, 0.1)'>
      <MediaCard
        image={image}
        settings={{
          buttonXSettings: {
            buttonSettings: {
              icon: 'edit',
            },
          }
        }} />
      <Text>{name} {surname}</Text>
    </Flex>
  );
};
