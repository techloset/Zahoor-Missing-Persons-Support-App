/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Colors, Images, Units } from '../constants/Constants';
import { TouchableOpacity } from 'react-native';
import { screenConfigs } from './screenConfig';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
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
    {screenConfigs.map(screen => (
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
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};
export default Navigation;
