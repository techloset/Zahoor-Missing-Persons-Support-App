import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import ProfileFlow from './src/screens/profile/profileFlow/ProfileFlow';
import Home from './src/screens/home/Home';
import MissingPersonDetail from './src/screens/missingPersonDetail/MissingPersonDetail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from './src/constants/Constants';

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Colors.WHITE_COLOR,
      },
    }}
  >
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ProfileFlow"
      component={ProfileFlow}
      options={{
        title: 'All Missing Persons',
      }}
    />
    <Stack.Screen
      name="MissingPersonDetail"
      component={MissingPersonDetail}
      options={{ title: 'Missing Person Detail' }}
    />
  </Stack.Navigator>
);
const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
