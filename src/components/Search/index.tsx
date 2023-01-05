import React from 'react';

import SearchIcon from '../../assets/Search.svg';

import { Box, HStack, Input } from 'native-base';

export const Search: React.FC = () => {
  return (
    <HStack
      alignItems='center'
      borderColor='coolGray.300'
      borderWidth='1'
      rounded='30'
      backgroundColor='#f2f2f2'
    >
      <Box paddingLeft='3'>
        <SearchIcon width={24} height={24} />
      </Box>

      <Input
        w='70%'
        maxW='75%'
        placeholder='Search'
        borderWidth='0'
        fontSize='17'
        rounded='30'
        h='50'
        backgroundColor='#f2f2f2'
      />
    </HStack>
  );
};
