import React from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Colors, Images, Units } from '../../constants/Constants';
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
            <Image source={Images.HERO_IMAGE} style={styles.heroImage} />
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.cardHeader}>
              <Text style={styles.featuredProfilesText}>Featured Profiles</Text>
              <Text
                style={styles.seeMoreText}
                onPress={() =>
                  navigation.navigate('Missing', {
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
    // paddingHorizontal: Units.WINDOW_WIDTH * 0.0427,
    paddingTop: Units.WINDOW_HEIGHT * 0.0332,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: Units.WINDOW_HEIGHT * 0.032,
    height: Units.WINDOW_HEIGHT * 0.1744,
    justifyContent: 'center',
  },
  scrollView: {
    height: Units.WINDOW_HEIGHT * 0.1301,
    marginBottom: Units.WINDOW_HEIGHT * 0.0332,
  },
  featuredProfilesContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Units.WINDOW_HEIGHT * 0.2754,
    width: Units.WINDOW_WIDTH * 0.8933,
    overflow: 'hidden',
    borderRadius: 8,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  cardContainer: {
    width: Units.WINDOW_WIDTH * 0.8933,
    height: Units.WINDOW_HEIGHT * 0.4234,
    marginBottom: Units.WINDOW_HEIGHT * 0.0148,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Units.WINDOW_HEIGHT * 0.0148,
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
