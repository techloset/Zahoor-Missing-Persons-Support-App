import React, { useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Alert,
  Image,
  Text,
} from 'react-native';
import { fetchMissingPersons } from '../../store/slices/firestoreSlice';
import { RootState, useAppDispatch, useAppSelector } from '../../store/store';
import Card from '../../components/card/Card';
import Modal from '../../components/modal/Modal';
import { Images } from '../../constants/constants';
import SearchBox from '../../components/searchBox/SearchBox';
import { styles } from './styles';
import { FormData } from '../../types/types';
// import { useNavigation } from '@react-navigation/native';

const Home = ({ navigation }: any) => {
  // const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const data = useAppSelector((state: RootState) => state.firestore.data);
  const loading = useAppSelector((state: RootState) => state.firestore.loading);
  const error = useAppSelector((state: RootState) => state.firestore.error);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    dispatch(fetchMissingPersons());
  }, [dispatch]);

  const handleCardPress = (dat: any) => {
    setSelectedData(dat);
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
              {loading && <Text>Loading...</Text>}
              {error && <Text>Error: {error}</Text>}
              {!loading &&
                !error &&
                data.map((item: FormData, index: number) => (
                  <Card
                    key={index.toString()}
                    data={item}
                    onPress={() => handleCardPress(item)}
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
