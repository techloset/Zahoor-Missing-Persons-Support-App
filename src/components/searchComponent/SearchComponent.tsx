/* eslint-disable react-native/no-inline-styles */
import { View, TextInput } from 'react-native';
import React from 'react';
import { Colors, Images } from '../../constants/Constants';

const SearchComponent = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TextInput
        style={{
          height: 40,
          borderColor: Colors.SECONDARY_COLOR,
          maxHeight: 36,
          borderWidth: 0.5,
          width: 285,
          color: Colors.SECONDARY_COLOR,
          borderRadius: 8,
          paddingLeft: 16,
          fontSize: 11,
          fontWeight: '400',
          lineHeight: 13.2,
        }}
        placeholder="Search"
        keyboardType="default"
        placeholderTextColor={Colors.SECONDARY_COLOR}
      />
      <View>
        <Images.SEARCH_ICON
          height={19}
          width={16}
          style={{ marginLeft: -30 }}
        />
      </View>
    </View>
  );
};

export default SearchComponent;
