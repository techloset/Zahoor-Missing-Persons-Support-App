import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { Colors, Images } from '../../constants/constants';

const Report = () => {
  return (
    <SafeAreaView style={{}}>
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
