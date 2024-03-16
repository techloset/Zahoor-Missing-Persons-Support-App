/* eslint-disable react-native/no-inline-styles */
import { View, SafeAreaView, TextInput, Image, Text } from 'react-native';
import React from 'react';
import { Colors, Images } from '../../constants/Constants';

const Home = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors.WHITE_COLOR,
        height: '100%',
        flexDirection: 'column',
        gap: 27,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          alignItems: 'center',
          gap: 26,
          height: 142,
          justifyContent: 'center',
        }}
      >
        <View>
          <Images.LOGO />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TextInput
            style={{
              height: 40,
              borderColor: Colors.SECONDARY_COLOR,
              maxHeight: 36,
              borderWidth: 0.5,
              width: 285,
              color: Colors.SECONDARY_COLOR,
              borderRadius: 8,
              paddingLeft: 16,
              fontSize: 11,
              fontWeight: '400',
              lineHeight: 13.2,
            }}
            placeholder="Search"
            keyboardType="default"
            placeholderTextColor={Colors.SECONDARY_COLOR}
          />
          <View>
            <Images.SEARCH_ICON
              height={19}
              width={16}
              style={{ marginLeft: -30 }}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 224,
          width: 335,
          overflow: 'hidden',
          borderRadius: 8,
        }}
      >
        <Image source={require('../../assets/images/HeroImage.png')} />
      </View>
      <View style={{ width: 335, height: 344, gap: 12 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: Colors.SECONDARY_COLOR }}>
            Featured Profiles
          </Text>
          <Text
            style={{
              color: Colors.PRIMARY_COLOR,
              textDecorationLine: 'underline',
            }}
          >
            See More
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
