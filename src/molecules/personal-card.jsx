import React from 'react';
import {
  Box,
  Flex,
  Text,
} from 'exsportia-components';
// pages
/////////////////////////////////////////////////////////////////

export const PersonalCard = ({
  settings,
  name = 'name',
  surname = 'surname',
  image = 'https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-avatar-placeholder-png-image_3416697.jpg',
}) => {
  return (
    <Flex
      bg='white'
      width='150px'
      height='200px'
      alignItems='center'
      borderRadius='10px'
      flexDirection='column'
      justifyContent='center'
      overflow='hidden'
      {...settings}
      boxShadow='0 0 10px 0 rgba(0, 0, 0, 0.1)'
    >
      <Box width='150px' height='180px' background={`url('${image}') center no-repeat`} />
      <Text>{name} {surname}</Text>
    </Flex>
  );
};
