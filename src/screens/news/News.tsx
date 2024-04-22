import { ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import NewsItem from '../../components/newsItem/NewsItem';
import { Colors, Units } from '../../constants/constants';

const News = () => {
  const newsData = [
    {
      data: {
        name: 'Zahoor Ahmad',
        gender: 'Male' as const,
        dateOfBirth: '23/01/2002',
        nicknames: 'zahoorey',
        height: '60',
        width: '25',
        eyeColor: 'Brown',
        hairColor: 'Brown',
        lengthOfTheHair: '10',
        lastSeen: '23/06/2022',
        lastSeenLocation: 'Faisalabad',
        imageUrl: 'url',
        userID: 'uid',
        reportLocation: 'Multan',
        reportDescription: 'This person has been seen in Multan',
      },
      reportedBy: 'Waqar Akram',
    },
  ];
  return (
    <ScrollView style={styles.container}>
      {newsData.map((item, index) => (
        <NewsItem data={item.data} reportedBy={item.reportedBy} key={index} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE_COLOR,
    height: Units.WINDOW_HEIGHT,
    width: Units.WINDOW_WIDTH,
    paddingTop: 36,
    paddingHorizontal: 20,
  },
});

export default News;
