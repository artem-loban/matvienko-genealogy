import React from 'react';
import { Flex, MediaCard, Text } from 'exsportia-components';
/////////////////////////////////////////////////////////////////

export const PersonalCard = ({
  settings,
  name = 'name',
  surname = 'surname',
  fathersName = 'fathersName',
  image = 'https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-avatar-placeholder-png-image_3416697.jpg',
}) => {
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
