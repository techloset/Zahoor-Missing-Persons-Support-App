import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
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
  const [searchValue, setSearchValue] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

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

  const filterItems = ['All', 'Male', 'Female', 'Trans'];

  const filteredData = data.filter(item => {
    const searchFilter = item.name
      .toLowerCase()
      .includes(searchValue.toLowerCase());

    const genderFilter =
      selectedFilter === 'All' || item.gender === selectedFilter.toLowerCase();

    return searchFilter && genderFilter;
  });

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
        <SearchBox onChangeText={text => setSearchValue(text)} />
      </View>
      <View style={styles.filterContainer}>
        <Text style={styles.filterText}>Filter By:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {filterItems.map((item, index) => (
            <TouchableOpacity
              style={[
                styles.filterItem,
                selectedFilter === item ? styles.selectedFilter : null,
              ]}
              key={index.toString()}
              onPress={() => setSelectedFilter(item)}
            >
              <Text
                style={[
                  styles.filterItemText,
                  selectedFilter === item ? styles.selectedFilterText : null,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <ScrollView style={styles.listContainer}>
        {loading && <Text>Loading...</Text>}
        {error && <Text>Error: {error}</Text>}
        {!loading &&
          !error &&
          filteredData.map((item, index) => (
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
