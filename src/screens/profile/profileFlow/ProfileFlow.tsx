import React from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Colors } from '../../../constants/Constants';
import SearchComponent from '../../../components/searchComponent/SearchComponent';
import ListItem from '../../../components/missingPerson/listItem/ListItem';

const ProfileFlow = () => {
  const filterData = ['Male', 'Female', 'Trans', 'Age', 'Location', 'Date'];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchComponent />
      </View>
      <View style={styles.filterContainer}>
        <Text style={styles.filterText}>Filter By:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {filterData.map((item, index) => (
            <View style={styles.filterItem} key={index.toString()}>
              <Text style={styles.filterItemText}>{item}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <ScrollView style={styles.listContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(item => (
          <ListItem key={item.toString()} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE_COLOR,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  searchContainer: {
    marginBottom: 26,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  filterText: {
    color: Colors.SECONDARY_COLOR,
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    marginRight: 16,
  },
  filterItem: {
    marginRight: 16,
    height: 36,
    backgroundColor: Colors.WHITE_COLOR,
    borderRadius: 6,
    justifyContent: 'center',
  },
  filterItemText: {
    color: Colors.SECONDARY_COLOR,
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    textAlign: 'center',
    marginRight: 16,
  },
  listContainer: {
    flex: 1,
    height: 454,
    overflow: 'hidden',
  },
});

export default ProfileFlow;
