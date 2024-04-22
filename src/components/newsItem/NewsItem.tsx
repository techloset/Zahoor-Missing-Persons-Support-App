import { View, Text, Image, Alert } from 'react-native';
import React from 'react';
import DetailsButton from '../detailsButton/DetailsButton';
import { FormData } from '../../types/types';
import { styles } from './styles';

type NewsItemProps = {
  data: FormData;
  reportedBy: string;
};

const NewsItem = ({ data, reportedBy }: NewsItemProps) => {
  const contactPerson = () => {
    Alert.alert('Contacted Person Details');
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: data.imageUrl }} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <View>
          <Text style={styles.text}>Name: {data.name}</Text>
          <Text style={styles.text}>Reported by: {reportedBy}</Text>
          <Text style={styles.text}>Location: {data?.reportLocation}</Text>
          <Text style={styles.text}>
            Description: {data?.reportDescription}
          </Text>
        </View>
        <DetailsButton title="Contact Person" onPress={() => contactPerson()} />
      </View>
    </View>
  );
};

export default NewsItem;
