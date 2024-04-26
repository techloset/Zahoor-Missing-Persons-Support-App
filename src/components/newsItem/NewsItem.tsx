import { View, Text, Image, Alert } from 'react-native';
import React from 'react';
import DetailsButton from '../detailsButton/DetailsButton';
import { styles } from './styles';
import { FormData } from '../../types/types';

const NewsItem = ({
  name,
  imageUrl,
  reportDescription,
  reportLocation,
  reportedBy,
}: FormData) => {
  const contactPerson = () => {
    Alert.alert('Contacted Person Details');
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <View>
          <Text style={styles.text}>Name: {name}</Text>
          <Text style={styles.text}>Reported by: {reportedBy}</Text>
          <Text style={styles.text}>Location: {reportLocation}</Text>
          <Text style={styles.text}>Description: {reportDescription}</Text>
        </View>
        <DetailsButton title="Contact Person" onPress={() => contactPerson()} />
      </View>
    </View>
  );
};

export default NewsItem;
