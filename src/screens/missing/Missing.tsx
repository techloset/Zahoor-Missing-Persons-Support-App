// Missing.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import ListItem from '../../components/listItem/ListItem';
import { styles } from './styles';
import SearchBox from '../../components/searchBox/SearchBox';
import Modal from '../../components/modal/Modal';
import { Images } from '../../constants/constants';
import { useNavigation } from '@react-navigation/native';
import { RootState, useAppDispatch, useAppSelector } from '../../store/store';
import { fetchMissingPersons } from '../../store/slices/firestoreSlice';

const Missing = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state: RootState) => state.firestore.data);
  const loading = useAppSelector((state: RootState) => state.firestore.loading);
  const error = useAppSelector((state: RootState) => state.firestore.error);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    dispatch(fetchMissingPersons());
  }, [dispatch]);

  const handleListPress = (dat: any) => {
    setSelectedData(dat);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Images.BACKSPACE_ICON
            height={25}
            width={25}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.headerText}>All Missing Persons</Text>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <SearchBox />
      </View>
      <ScrollView style={styles.listContainer}>
        {loading && <Text>Loading...</Text>}
        {error && <Text>Error: {error}</Text>}
        {!loading &&
          !error &&
          data.map((item, index) => (
            <ListItem
              key={index.toString()}
              data={item}
              onPress={() => handleListPress(item)}
            />
          ))}
      </ScrollView>
      <Modal
        visible={modalVisible}
        onClose={handleModalClose}
        data={selectedData}
      />
    </SafeAreaView>
  );
};

export default Missing;
