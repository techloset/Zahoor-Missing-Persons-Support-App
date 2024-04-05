/* eslint-disable react-native/no-inline-styles */
import { ScrollView } from 'react-native';
import React from 'react';
import NewsItem from '../../components/missingPerson/reportListItem/ReportListItem';
import { Colors, Units } from '../../constants/Constants';

const News = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: Colors.WHITE_COLOR,
        height: Units.WINDOW_HEIGHT,
        width: Units.WINDOW_WIDTH,
        paddingTop: 36,
        paddingHorizontal: 20,
      }}
    >
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </ScrollView>
  );
};

export default News;
