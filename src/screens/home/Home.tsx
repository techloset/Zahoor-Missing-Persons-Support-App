import React from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  ScrollView,
  Alert,
} from 'react-native';
import { Images } from '../../constants/Constants';
import Card from '../../components/missingPerson/card/Card';
import SearchComponent from '../../components/searchComponent/SearchComponent';
import { styles } from './styles';
import HeroImage from '../../assets/images/HeroImage.png';

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
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1712313498056-1feb70bd6999?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              }}
            />

            {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(index => (
                <Card
                  imageUrl={
                    'https://images.unsplash.com/photo-1712313498056-1feb70bd6999?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  }
                  age={12}
                  lastSeen="12:30"
                  lastSeenLocation="Faisalabad"
                  name="John Doe"
                  key={index}
                />
              ))}
            </ScrollView> */}
          </View>
        </View>
      </ScrollView>
      <Images.FLOAT_ICON
        height={48}
        width={48}
        style={styles.floatButton}
        onPress={() => Alert.alert('Floating Button Clicked')}
      />
    </SafeAreaView>
  );
};

export default Home;
