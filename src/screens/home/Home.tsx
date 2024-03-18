/* eslint-disable react-native/no-inline-styles */
import {
  View,
  SafeAreaView,
  TextInput,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import React from 'react';
import { Colors, Images } from '../../constants/Constants';
import Card from '../../components/missingPerson/card/Card';
import NavigationStack from '../../components/navigationStack/NavigationStack';

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
          // position: 'absolute',
          // top: 0,
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
      <ScrollView style={{ height: 106 }}>
        <View
          style={{
            gap: 27,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
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
            <Image source={Images.HERO_IMAGE} />
          </View>
          <View style={{ width: 335, height: 344, gap: 12 }}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
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
            <ScrollView horizontal>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      <View style={{}}>
        <NavigationStack />
      </View>
    </SafeAreaView>
  );
};

export default Home;
