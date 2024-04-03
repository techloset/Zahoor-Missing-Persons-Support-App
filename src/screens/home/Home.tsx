import React from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Colors, Images } from '../../constants/Constants';
import Card from '../../components/missingPerson/card/Card';
import SearchComponent from '../../components/searchComponent/SearchComponent';

const Home = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Images.LOGO />
        <SearchComponent />
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.featuredProfilesContainer}>
          <View style={styles.imageContainer}>
            <Image source={Images.HERO_IMAGE} />
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.cardHeader}>
              <Text style={styles.featuredProfilesText}>Featured Profiles</Text>
              <Text
                style={styles.seeMoreText}
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
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(index => {
                return <Card key={index} />;
              })}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE_COLOR,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 27,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 26,
    height: 142,
    justifyContent: 'center',
  },
  scrollView: {
    height: 106,
    marginBottom: 27,
  },
  featuredProfilesContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 224,
    width: 335,
    overflow: 'hidden',
    borderRadius: 8,
  },
  cardContainer: {
    width: 335,
    height: 344,
    marginBottom: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  featuredProfilesText: {
    color: Colors.SECONDARY_COLOR,
  },
  seeMoreText: {
    color: Colors.PRIMARY_COLOR,
    textDecorationLine: 'underline',
  },
});

export default Home;
