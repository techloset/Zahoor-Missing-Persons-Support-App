/* eslint-disable react-native/no-inline-styles */
import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { Colors, Images } from '../../../constants/Constants';

const ListItem = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 154,
        width: 334,
        gap: 8,
        marginBottom: 16,
      }}
    >
      <View
        style={{ height: 154, width: 115, borderRadius: 4, overflow: 'hidden' }}
      >
        <Image
          source={Images.MISSING_PERSON}
          style={{ height: 154, width: 115 }}
        />
      </View>
      <View>
        <View style={{ height: 96 }}>
          <Text style={{ color: Colors.SECONDARY_COLOR }}>Name: </Text>
          <Text style={{ color: Colors.SECONDARY_COLOR }}>Age: </Text>
          <Text style={{ color: Colors.SECONDARY_COLOR }}>Last Seen: </Text>
          <Text style={{ color: Colors.SECONDARY_COLOR }}>
            Last Seen Location:{' '}
          </Text>
          <Pressable
            style={{
              backgroundColor: Colors.PRIMARY_COLOR,
              width: 93,
              height: 24,
              paddingVertical: 12,
              paddingHorizontal: 16,
              marginBottom: 10,
              borderRadius: 8,
              opacity: 0.8,
            }}
          >
            <Text style={{ color: Colors.WHITE_COLOR }}>Details</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ListItem;
