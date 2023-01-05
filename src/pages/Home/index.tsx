import React from 'react';
import { Box, Text } from 'native-base';

import { DrawerMenu } from '../../components/DrawerMenu';
import { Search } from '../../components/Search';
import { TabViewComp } from '../../components/TabView';

export const Home: React.FC = () => {
  return (
    <Box flex='1' safeArea bg='#F2F2F2' paddingLeft='5'>
      <Box flexDir='row' alignItems='center'>
        <DrawerMenu />
        <Search />
      </Box>
      <Text bold fontSize='4xl' marginY='55'>
        Order online{'\n'}collect in store
      </Text>
      <TabViewComp />
    </Box>
  );
};
