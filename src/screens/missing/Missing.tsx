import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import ListItem from '../../components/listItem/ListItem';
import { styles } from './styles';
import SearchBox from '../../components/searchBox/SearchBox';
import Modal from '../../components/modal/Modal';
import { Images } from '../../constants/constants';
import { useNavigation } from '@react-navigation/native';
import { CardData } from '../../types/types';

const Missing = () => {
  const filterList = ['Male', 'Female', 'Trans', 'Age', 'Location', 'Date'];
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedData, setSelectedData] = useState<any>(null);
  const dummyCardData: CardData[] = [
    {
      imageUrl:
        'https://images.unsplash.com/photo-1712313498056-1feb70bd6999?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      age: 12,
      lastSeen: '12:30',
      lastSeenLocation: 'Faisalabad',
      name: 'John Doe',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1712313498056-1feb70bd6999?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      age: 12,
      lastSeen: '12:30',
      lastSeenLocation: 'Faisalabad',
      name: 'John Doe',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1712313498056-1feb70bd6999?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      age: 12,
      lastSeen: '12:30',
      lastSeenLocation: 'Faisalabad',
      name: 'John Doe',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1712313498056-1feb70bd6999?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      age: 12,
      lastSeen: '12:30',
      lastSeenLocation: 'Faisalabad',
      name: 'John Doe',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1712313498056-1feb70bd6999?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      age: 12,
      lastSeen: '12:30',
      lastSeenLocation: 'Faisalabad',
      name: 'John Doe',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1712313498056-1feb70bd6999?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      age: 12,
      lastSeen: '12:30',
      lastSeenLocation: 'Faisalabad',
      name: 'John Doe',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1712313498056-1feb70bd6999?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      age: 12,
      lastSeen: '12:30',
      lastSeenLocation: 'Faisalabad',
      name: 'John Doe',
    },
  ];
  const handleListPress = (data: any) => {
    setSelectedData(data);
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
      <View style={styles.filterContainer}>
        <Text style={styles.filterText}>Filter By:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {filterList.map((item, index) => (
            <View style={styles.filterItem} key={index.toString()}>
              <Text style={styles.filterItemText}>{item}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <ScrollView style={styles.listContainer}>
        {dummyCardData.map((item, index) => (
          <ListItem
            key={index.toString()}
            imageUrl={item.imageUrl}
            name={item.name}
            age={item.age}
            lastSeen={item.lastSeen}
            lastSeenLocation={item.lastSeenLocation}
            onPress={() =>
              handleListPress({
                imageUrl: item.imageUrl,
                name: item.name,
                age: item.age,
                lastSeen: item.lastSeen,
                lastSeenLocation: item.lastSeenLocation,
              })
            }
          />
        ))}
      </ScrollView>
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

export default Missing;
