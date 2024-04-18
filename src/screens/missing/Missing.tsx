import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import ListItem from '../../components/listItem/ListItem';
import { styles } from './styles';
import SearchBox from '../../components/searchBox/SearchBox';

const Missing = () => {
  const filterData = ['Male', 'Female', 'Trans', 'Age', 'Location', 'Date'];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchBox />
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
        {[1, 2, 3, 4, 5].map(item => (
          <ListItem
            name="John Doe"
            age={12}
            lastSeen="12:30"
            lastSeenLocation="Faisalabad"
            key={item.toString()}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Missing;
