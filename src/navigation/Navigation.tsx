/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Colors, Images, Units } from '../constants/Constants';
import Home from '../screens/home/Home';
import Missing from '../screens/missing/Missing';
import Upload from '../screens/upload/Upload';
import EditProfile from '../screens/auth/editProfile/EditProfile';

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarInactiveTintColor: Colors.SECONDARY_COLOR,
      tabBarActiveTintColor: Colors.PRIMARY_COLOR,
      tabBarActiveBackgroundColor: Colors.WHITE_COLOR,
      tabBarStyle: {
        height: 62,
        marginHorizontal: 40,
        borderRadius: 44,
        marginBottom: 15,
        marginTop: 9,
        borderWidth: 3,
        borderColor: Colors.SECONDARY_COLOR,
        borderTopWidth: 3,
        width: Units.WINDOW_WIDTH - 80,
        overflow: 'hidden',
        // padding: 8,
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
        headerShown: false,
      }}
    />

    <Tab.Screen
      name="Missing"
      component={Missing}
      options={{
        title: 'Reports',
        tabBarIcon: ({ focused }: { focused: boolean }) => {
          return focused ? <Images.BLUE_REPORTS /> : <Images.REPORTS_ICON />;
        },
        headerShown: true,
      }}
    />
    <Tab.Screen
      name="Upload"
      component={Upload}
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
    <Tab.Screen
      name="EditProfile"
      component={EditProfile}
      options={{
        title: 'Profile',
        tabBarIcon: ({ focused }: { focused: boolean }) => {
          return focused ? <Images.BLUE_PROFILE /> : <Images.PROFILE_ICON />;
        },
      }}
    />
  </Tab.Navigator>
);

const Navigation = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};
export default Navigation;
