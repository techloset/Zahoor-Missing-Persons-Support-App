import { ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import NewsItem from '../../components/newsItem/NewsItem';
import { Colors, Units } from '../../constants/constants';
import useMissingPersonsData from '../../hooks/useMissingPersonsData';

const News = () => {
  const { data } = useMissingPersonsData();
  return (
    <ScrollView style={styles.container}>
      {data.map(
        (item, index) =>
          item.reportLocation &&
          item.reportDescription && (
            <NewsItem
              id={item.id}
              imageUrl={item.imageUrl}
              name={item.name}
              reportedBy={item.reportedBy}
              reportLocation={item.reportLocation}
              reportDescription={item.reportDescription}
              key={index}
              reportedByEmail={item.reportedByEmail}
              dateOfBirth={item.dateOfBirth}
              eyeColor={item.eyeColor}
              gender={item.gender}
              hairColor={item.hairColor}
              height={item.height}
              lastSeen={item.lastSeen}
              lastSeenLocation={item.lastSeenLocation}
              lengthOfTheHair={item.lengthOfTheHair}
              nicknames={item.nicknames}
              userID={item.userID}
              width={item.width}
            />
          ),
      )}
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
