/* eslint-disable react-native/no-inline-styles */
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { Colors, Units } from '../../../constants/Constants';
import SearchComponent from '../../../components/searchComponent/SearchComponent';
import ListItem from '../../../components/missingPerson/listItem/ListItem';
// import NavigationStack from '../../../components/navigationStack/NavigationStack';
// import ListItem from '../../../components/missingPerson/listItem/ListItem';

const ProfileFlow = () => {
  const filterData = ['Male', 'Female', 'Trans', 'Age', 'Location', 'Date'];
  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors.WHITE_COLOR,
        height: Units.WINDOW_HEIGHT,
        width: Units.WINDOW_WIDTH,
      }}
    >
      <View
        style={{
          height: 132,
          paddingTop: 10,
          paddingRight: 0,
          paddingBottom: 16,
          paddingLeft: 0,
          // top: 97,
          gap: 26,
        }}
      >
        <SearchComponent />
        <View
          style={{
            width: Units.WINDOW_WIDTH,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 21,
            height: 44,
          }}
        >
          <View style={styles.container}>
            <View style={styles.filterItem}>
              <Text style={[styles.text, { fontWeight: 'bold', height: 36 }]}>
                Filter By:
              </Text>
            </View>

            <ScrollView horizontal style={styles.scrollView}>
              {filterData.map(item => (
                <View style={styles.filterItem}>
                  <Text style={styles.text}>{item}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
      <ScrollView
        style={{
          flexDirection: 'column',
          top: 0,
          gap: 16,
          height: 454,
          overflow: 'hidden',
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(item => (
          <ListItem key={item.toString()} />
        ))}
      </ScrollView>

      {/* <NavigationStack /> */}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: 8,
    width: 333,
    // gap: 16,
    // overflow: 'hidden',
  },
  scrollView: {
    marginRight: 16,
    width: '100%',
    gap: 16,
    overflow: 'hidden',
  },
  filterItem: {
    marginRight: 16,
    height: 36,
    backgroundColor: Colors.WHITE_COLOR,
    borderRadius: 6,
    // elevation: 2,
    // shadowColor: Colors.SECONDARY_COLOR,
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 2,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  text: {
    color: Colors.SECONDARY_COLOR,
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    textAlign: 'center',
    marginRight: 16,
  },
});
export default ProfileFlow;
