import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../pages/Home';
import { Favorites } from '../pages/Favorites';
import { Profile } from '../pages/Profile';
import { Cart } from '../pages/Cart';
import { Platform } from 'react-native';

import HomeIcon from '../assets/Home.svg';
import ProfileIcon from '../assets/Profile.svg';
import HeartIcon from '../assets/Heart.svg';
import BuyIcon from '../assets/Buy.svg';

const { Navigator, Screen } = createBottomTabNavigator();

export const TabRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'red',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        },
      }}
    >
      <Screen
        name='home'
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <HomeIcon
              width={30}
              height={30}
              stroke={focused ? '#ffffff' : '#000'}
              fill={focused ? '#5956E9' : null}
            />
          ),
        }}
      />
      <Screen
        name='favorites'
        component={Favorites}
        options={{
          tabBarIcon: ({ focused }) => (
            <HeartIcon
              width={40}
              height={35}
              stroke={focused ? '#ffffff' : '#000'}
              fill={focused ? '#5956E9' : null}
            />
          ),
        }}
      />
      <Screen
        name='profile'
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <ProfileIcon
              width={40}
              height={35}
              stroke={focused ? '#ffffff' : '#000'}
              fill={focused ? '#5956E9' : null}
            />
          ),
        }}
      />
      <Screen
        name='cart'
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) => (
            <BuyIcon
              width={40}
              height={35}
              stroke={focused ? '#ffffff' : '#000'}
              fill={focused ? '#5956E9' : null}
            />
          ),
        }}
      />
    </Navigator>
  );
};
