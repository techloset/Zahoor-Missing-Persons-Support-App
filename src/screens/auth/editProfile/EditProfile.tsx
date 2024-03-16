import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { Colors, Images } from '../../../constants/Constants';

const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: Colors.WHITE_COLOR }}>
      <View>
        <Images.LOGO />
        <Text>Edit Profile Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
