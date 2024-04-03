import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { Colors, Images } from '../../constants/Constants';

const Report = () => {
  return (
    <SafeAreaView style={{ backgroundColor: Colors.WHITE_COLOR }}>
      <View>
        <Images.LOGO />
        <Text style={{ color: Colors.SECONDARY_COLOR }}>
          Missing Person Report Screen
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Report;
