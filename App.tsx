import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { enableScreens } from 'react-native-screens';

import MissingPersonDetail from './src/screens/missingPersonDetail/MissingPersonDetail';
// import Home from './src/screens/home/Home';
// import Forgot from './src/screens/auth/forgot/Forgot';
// import Login from './src/screens/auth/login/Login';
// import Registration from './src/screens/auth/registration/Registration';

const App: React.FC = (): JSX.Element => {
  const Stack = createNativeStackNavigator();
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Missing Person Detail"
    //       component={MissingPersonDetail}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <MissingPersonDetail />
  );
};

export default App;
