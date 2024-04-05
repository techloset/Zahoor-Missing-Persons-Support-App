import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import SearchComponent from '../../components/searchComponent/SearchComponent';
import ListItem from '../../components/missingPerson/listItem/ListItem';
import { styles } from './styles';

const Missing = () => {
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

export default Missing;
