import React from 'react';
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
import useMissing from '../../hooks/useMissing';

const Missing = () => {
  const {
    loading,
    error,
    modalVisible,
    selectedData,
    selectedFilter,
    handleListPress,
    handleModalClose,
    filterItems,
    filteredData,
    setSearchValue,
    setSelectedFilter,
    navigation,
  } = useMissing();

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
