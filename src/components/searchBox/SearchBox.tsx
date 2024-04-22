import { View, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { Colors, Images, Units } from '../../constants/constants';

interface SearchBoxProps {
  onChangeText: (text: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        keyboardType="default"
        placeholderTextColor={Colors.SECONDARY_COLOR}
        onChangeText={onChangeText}
      />
      <View style={styles.iconContainer}>
        <Images.SEARCH_ICON
          height={Units.WINDOW_HEIGHT * 0.0234}
          width={Units.WINDOW_WIDTH * 0.0427}
          style={styles.icon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: Units.WINDOW_HEIGHT * 0.0493,
    borderColor: Colors.SECONDARY_COLOR,
    maxHeight: Units.WINDOW_HEIGHT * 0.0443,
    borderWidth: 0.5,
    width: Units.WINDOW_WIDTH * 0.76,
    color: Colors.SECONDARY_COLOR,
    borderRadius: 8,
    paddingLeft: Units.WINDOW_WIDTH * 0.0427,
    fontSize: Units.WINDOW_WIDTH * 0.0293,
    fontWeight: '400',
    lineHeight: Units.WINDOW_HEIGHT * 0.0162,
  },
  iconContainer: {
    marginLeft: -Units.WINDOW_WIDTH * 0.08,
  },
  icon: {
    marginLeft: -Units.WINDOW_WIDTH * 0.0001,
  },
});

export default SearchBox;
