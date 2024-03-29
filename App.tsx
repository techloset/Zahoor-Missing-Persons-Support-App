import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import MissingPersonDetail from './src/screens/missingPersonDetail/MissingPersonDetail';
// import Home from './src/screens/home/Home';
import ProfileFlow from './src/screens/profile/profileFlow/ProfileFlow';
// import Forgot from './src/screens/auth/forgot/Forgot';
// import Login from './src/screens/auth/login/Login';
// import Registration from './src/screens/auth/registration/Registration';

// const Stack = createNativeStackNavigator();

const App: React.FC = (): JSX.Element => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Missing Person Detail"
    //       component={MissingPersonDetail}
    //     />
    //     <Stack.Screen name="Home" component={Home} />
    //     <Stack.Screen name="Forgot" component={Forgot} />
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="Registration" component={Registration} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <Home />
    <ProfileFlow />
    // <MissingPersonDetail />
  );
};

export default App;
