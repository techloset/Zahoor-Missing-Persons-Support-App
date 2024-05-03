import React from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Alert,
  Image,
  Text,
} from 'react-native';
import Card from '../../components/card/Card';
import Modal from '../../components/modal/Modal';
import { Images } from '../../constants/constants';
import SearchBox from '../../components/searchBox/SearchBox';
import { styles } from './styles';
import { MissingPersonData } from '../../types/types';
import useMissingPersonsData from '../../hooks/useMissingPersonsData';

const Home = ({ navigation }: any) => {
  const {
    loading,
    error,
    modalVisible,
    selectedData,
    handlePress,
    handleModalClose,
    filteredData,
    setSearchValue,
  } = useMissingPersonsData();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Images.LOGO />
        <SearchBox onChangeText={text => setSearchValue(text)} />
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
              {loading && <Text>Loading...</Text>}
              {error && <Text>Error: {error}</Text>}
              {!loading &&
                !error &&
                filteredData.map((item: MissingPersonData, index: number) => (
                  <Card
                    key={index.toString()}
                    data={item}
                    onPress={() => handlePress(item)}
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
        data={selectedData}
      />
    </SafeAreaView>
  );
};

export default Home;
