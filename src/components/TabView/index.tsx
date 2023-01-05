import React from 'react';
import { Dimensions, StatusBar } from 'react-native';

import {
  Box,
  Center,
  FlatList,
  Pressable,
  useColorModeValue,
} from 'native-base';
import Animated from 'react-native-reanimated';
import { SceneMap, TabView } from 'react-native-tab-view';
import Products from '../Products';

const data = [
  {
    key: 'first',
    title: 'Wearable',
  },
  {
    key: 'second',
    title: 'Laptops',
  },
  {
    key: 'third',
    title: 'Phones',
  },
  {
    key: 'fourth',
    title: 'Drones',
  },
];

const FirstRoute = () => (
  <Box flex='1'>
    <FlatList
      data={data}
      renderItem={({ item }) => <Products data={item} />}
      keyExtractor={(item) => item.key}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  </Box>
);

const SecondRoute = () => (
  <Center flex={1} my='4'>
    This is Tab 2
  </Center>
);

const ThirdRoute = () => (
  <Center flex={1} my='4'>
    This is Tab 3
  </Center>
);

const FourthRoute = () => (
  <Center flex={1} my='4'>
    This is Tab 4{' '}
  </Center>
);

const initialLayout = {
  width: Dimensions.get('window').width,
};
const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute,
});

export const TabViewComp = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'first',
      title: 'Wearable',
    },
    {
      key: 'second',
      title: 'Laptops',
    },
    {
      key: 'third',
      title: 'Phones',
    },
    {
      key: 'fourth',
      title: 'Drones',
    },
  ]);

  const renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <Box flexDirection='row'>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });
          const color =
            index === i
              ? useColorModeValue('#000', '#e5e5e5')
              : useColorModeValue('#1f2937', '#a1a1aa');
          const borderColor =
            index === i
              ? 'cyan.500'
              : useColorModeValue('coolGray.200', 'gray.400');
          return (
            <Box
              borderBottomWidth='3'
              borderColor={borderColor}
              flex={1}
              alignItems='center'
              p='3'
            >
              <Pressable
                onPress={() => {
                  setIndex(i);
                }}
              >
                <Animated.Text
                  style={{
                    color,
                  }}
                >
                  {route.title}
                </Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <Box flex='1'>
      <TabView
        navigationState={{
          index,
          routes,
        }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </Box>
  );
};
