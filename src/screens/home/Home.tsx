import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { Colors, Images } from '../../constants/Constants';
import NavigationStack from '../../components/navigationStack/NavigationStack';

const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: Colors.WHITE_COLOR }}>
      <View>
        <Images.LOGO />
        <Text style={{ color: Colors.SECONDARY_COLOR }}>Home Screen</Text>
      </View>
      <NavigationStack />
    </SafeAreaView>
  );
};

export default Home;
