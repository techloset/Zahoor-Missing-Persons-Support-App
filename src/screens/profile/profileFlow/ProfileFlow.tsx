import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { Colors, Images } from '../../../constants/Constants';

const ProfileFlow = () => {
  return (
    <SafeAreaView style={{ backgroundColor: Colors.WHITE_COLOR }}>
      <View>
        <Images.LOGO />
        <Text style={{ color: Colors.SECONDARY_COLOR }}>
          Profile Flow Screen
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ProfileFlow;
