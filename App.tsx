import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import ProfileFlow from './src/screens/profile/profileFlow/ProfileFlow';
import Home from './src/screens/home/Home';
import MissingPersonDetail from './src/screens/missingPersonDetail/MissingPersonDetail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="ProfileFlow" component={ProfileFlow} />
    <Stack.Screen name="MissingPersonDetail" component={MissingPersonDetail} />
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
