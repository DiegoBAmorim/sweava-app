import React from 'react';

import MenuIcon from '../../assets/Menu.svg';

import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';
import { Pressable } from 'native-base';

export const DrawerMenu: React.FC = () => {
  const navigation = useNavigation();
  //  margin-right: 26px;
  return (
    <Pressable
      marginRight='25'
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
    >
      <MenuIcon width={30} height={30} />
    </Pressable>
  );
};
