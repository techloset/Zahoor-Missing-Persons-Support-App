import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  ScrollView,
  Alert,
} from 'react-native';
import { Images } from '../../constants/constants';
import Card from '../../components/card/Card';
import Modal from '../../components/modal/Modal';
import { styles } from './styles';
import SearchBox from '../../components/searchBox/SearchBox';

const Home = ({ navigation }: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedData, setSelectedData] = useState<any>(null);

  const handleCardPress = (data: any) => {
    setSelectedData(data);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Images.LOGO />
        <SearchBox />
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

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {[1, 2, 3, 4, 5].map(index => (
                <Card
                  imageUrl={
                    'https://images.unsplash.com/photo-1712313498056-1feb70bd6999?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  }
                  age={12}
                  lastSeen="12:30"
                  lastSeenLocation="Faisalabad"
                  name="John Doe"
                  key={index}
                  onPress={() =>
                    handleCardPress({
                      name: 'John Doe',
                      age: 12,
                      lastSeen: '12:30',
                      lastSeenLocation: 'Faisalabad',
                    })
                  }
                />
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      <Images.FLOAT_ICON
        height={48}
        width={48}
        style={styles.floatButton}
        onPress={() => Alert.alert('Floating Button Clicked')}
      />
      <Modal
        visible={modalVisible}
        onClose={handleModalClose}
        name={selectedData?.name}
        age={selectedData?.age}
        lastSeen={selectedData?.lastSeen}
        lastSeenLocation={selectedData?.lastSeenLocation}
      />
    </SafeAreaView>
  );
};

export default Home;
