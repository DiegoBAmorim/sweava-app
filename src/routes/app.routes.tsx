import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TabRoutes } from './tab.routes';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='TabRoutes' component={TabRoutes} />
    </Navigator>
  );
}
