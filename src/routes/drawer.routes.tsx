import { createDrawerNavigator } from '@react-navigation/drawer';

import { AppRoutes } from './app.routes';

const { Navigator, Screen } = createDrawerNavigator();

export function DrawerRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name='StackRoutes' component={AppRoutes} />
    </Navigator>
  );
}
