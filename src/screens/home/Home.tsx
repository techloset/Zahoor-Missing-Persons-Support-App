/* eslint-disable react-native/no-inline-styles */
import { View, SafeAreaView, Image, Text, ScrollView } from 'react-native';
import React from 'react';
import { Colors, Images } from '../../constants/Constants';
import Card from '../../components/missingPerson/card/Card';
import NavigationStack from '../../components/navigationStack/NavigationStack';
import SearchComponent from '../../components/searchComponent/SearchComponent';

const Home = ({ navigation }) => {
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
        <SearchComponent />
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
                onPress={() =>
                  navigation.navigate('ProfileFlow', {
                    title: 'Featured Profiles',
                  })
                }
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
