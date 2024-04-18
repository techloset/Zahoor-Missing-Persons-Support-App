/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Colors, Images, Units } from '../constants/constants';
import { TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Forgot from '../screens/auth/forgot/Forgot';
import Login from '../screens/auth/login/Login';
import Registration from '../screens/auth/registration/Registration';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useEffect, useState } from 'react';
import screenConfigs from './screenConfig';
import { ScreenConfig } from '../types/types';

type RootStackParamList = {
  Login: undefined;
  Registration: undefined;
  Forgot: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

const StackGroup = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="Forgot" component={Forgot} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }): BottomTabNavigationOptions => ({
      headerShown: false,
      tabBarInactiveTintColor: Colors.SECONDARY_COLOR,
      tabBarActiveTintColor: Colors.PRIMARY_COLOR,
      tabBarStyle: {
        elevation: 0,
        height: 62,
        display: route.name === 'Profile' ? 'none' : 'flex',
        marginHorizontal: 40,
        borderRadius: 44,
        marginBottom: 15,
        marginTop: 9,
        borderWidth: 3,
        borderColor: Colors.SECONDARY_COLOR,
        borderTopWidth: 3,
        width: Units.WINDOW_WIDTH - 70,
        paddingHorizontal: 10,
        overflow: 'hidden',
        backgroundColor: Colors.WHITE_COLOR,
        marginRight: 'auto',
        marginLeft: 'auto',
      },
    })}
  >
    {screenConfigs.map((screen: ScreenConfig) => (
      <Tab.Screen
        key={screen.name}
        name={screen.name}
        component={screen.component}
        options={({ navigation }) => ({
          title: screen.title,
          tabBarIcon: ({ focused }) =>
            focused ? screen.icon.focused : screen.icon.unfocused,
          headerShown: screen.hideHeader ? false : true,
          headerStyle: { backgroundColor: Colors.WHITE_COLOR },
          headerTitle: screen.headerTitle || screen.title,
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 10 }}
              onPress={() => navigation.goBack()}
            >
              <Images.BACKSPACE_ICON height={25} width={25} />
            </TouchableOpacity>
          ),
        })}
      />
    ))}
  </Tab.Navigator>
);

const Navigation = () => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const handleAuthChange = (userData: FirebaseAuthTypes.User | null) => {
    setUser(userData);
    if (loading) {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(handleAuthChange);
    return unsubscribe;
  }, []);

  const isLoggedIn = !!user;

  return (
    <NavigationContainer>
      {isLoggedIn ? <TabNavigator /> : <StackGroup />}
    </NavigationContainer>
  );
};

export default Navigation;
