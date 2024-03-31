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
      <View
        style={{
          height: 132,
          flex: 1,
          justifyContent: 'space-between',
          gap: 12,
        }}
      >
        <View>
          <Text
            style={{
              color: Colors.SECONDARY_COLOR,
              lineHeight: 24,
              fontSize: 16,
              fontWeight: '400',
            }}
          >
            Name:{' '}
          </Text>
          <Text
            style={{
              color: Colors.SECONDARY_COLOR,
              lineHeight: 24,
              fontSize: 16,
              fontWeight: '400',
            }}
          >
            Age:{' '}
          </Text>
          <Text
            style={{
              color: Colors.SECONDARY_COLOR,
              lineHeight: 24,
              fontSize: 16,
              fontWeight: '400',
            }}
          >
            Last Seen:{' '}
          </Text>
          <Text
            style={{
              color: Colors.SECONDARY_COLOR,
              lineHeight: 24,
              fontSize: 16,
              fontWeight: '400',
            }}
          >
            Last Seen Location:{' '}
          </Text>
        </View>
        <Pressable
          style={{
            backgroundColor: Colors.PRIMARY_COLOR,
            width: 93,
            height: 24,
            marginBottom: 10,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: Colors.WHITE_COLOR,
            }}
          >
            Details
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ListItem;
