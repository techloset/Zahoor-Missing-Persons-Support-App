/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import ProfileFlow from './src/screens/profile/profileFlow/ProfileFlow';
import Home from './src/screens/home/Home';
import MissingPersonDetail from './src/screens/missingPersonDetail/MissingPersonDetail';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors, Images } from './src/constants/Constants';

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Colors.WHITE_COLOR,
      },
      headerShown: false,
      tabBarInactiveTintColor: Colors.SECONDARY_COLOR,
      tabBarActiveTintColor: Colors.PRIMARY_COLOR,
      tabBarStyle: {
        backgroundColor: Colors.WHITE_COLOR,
        // borderTopWidth: 0,
        // shadowColor: 'transparent',
        elevation: 0,
        borderColor: Colors.SECONDARY_COLOR,
        // marginTop: -15,
        borderRadius: 42,
        width: 277,
        alignSelf: 'center',
        height: 62,
      },
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        title: 'Home',
        tabBarIcon: ({ focused }: { focused: boolean }) => {
          return focused ? <Images.BLUE_HOME /> : <Images.HOME_ICON />;
        },
      }}
    />

    <Tab.Screen
      name="ProfileFlow"
      component={ProfileFlow}
      options={{
        title: 'Reports',
        tabBarIcon: ({ focused }: { focused: boolean }) => {
          return focused ? <Images.BLUE_REPORTS /> : <Images.REPORTS_ICON />;
        },
        headerShown: true,
      }}
    />
    <Tab.Screen
      name="MissingPersonDetail"
      component={MissingPersonDetail}
      options={{
        title: 'Upload',
        tabBarIcon: ({ focused }: { focused: boolean }) => {
          return focused ? (
            <Images.BLUE_PLUS_CIRCLE />
          ) : (
            <Images.PLUS_CIRCLE_ICON />
          );
        },
      }}
    />
    {/* <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        title: 'Profile',
        tabBarIcon: ({ focused }: { focused: boolean }) => {
          return focused ? <Images.BLUE_PROFILE /> : <Images.PROFILE_ICON />;
        },
      }}
    /> */}
  </Tab.Navigator>
);

// const Stack = createNativeStackNavigator();

// const StackNavigator = (): React.JSX.Element => (
//   <Stack.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: Colors.WHITE_COLOR,
//       },
//     }}
//   >
//     <Stack.Screen
//       name="Home"
//       component={Home}
//       options={{
//         headerShown: false,
//       }}
//     />
//     <Stack.Screen
//       name="ProfileFlow"
//       component={ProfileFlow}
//       options={{
//         title: 'All Missing Persons',
//       }}
//     />
//     <Stack.Screen
//       name="MissingPersonDetail"
//       component={MissingPersonDetail}
//       options={{ title: 'Missing Person Detail' }}
//     />
//   </Stack.Navigator>
// );
const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;
