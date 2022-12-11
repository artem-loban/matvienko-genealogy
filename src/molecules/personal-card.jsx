import React from 'react';
import {
  Flex,
  Text,
  MediaCard,
  ModalContext,
} from 'exsportia-components';
// pages
import { Profile } from '../pages/person-profile';
/////////////////////////////////////////////////////////////////

export const PersonalCard = ({
  settings,
  name = 'name',
  surname = 'surname',
  image = 'https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-avatar-placeholder-png-image_3416697.jpg',
}) => {
  const { openModal } = React.useContext(ModalContext);
  return (
    <Flex
      bg='white'
      width='150px'
      height='200px'
      cursor='pointer'
      alignItems='center'
      borderRadius='10px'
      flexDirection='column'
      justifyContent='center'
      {...settings}
      onClick={() => openModal({
        component: (
          <Profile />
        ),
      })}
      boxShadow='0 0 10px 0 rgba(0, 0, 0, 0.1)'
    >
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
