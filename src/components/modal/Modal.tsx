/* eslint-disable react-native/no-inline-styles */
import { View, Text, Image, TextInput, Pressable } from 'react-native';
import React from 'react';
import { Colors, Images, Units } from '../../constants/Constants';

const Modal = () => {
  return (
    <View
      style={{
        height: Units.WINDOW_HEIGHT,
        width: Units.WINDOW_WIDTH,
        backgroundColor: Colors.SECONDARY_COLOR,
        // opacity: 0.67,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          width: 335,
          height: 581,
          borderRadius: 20,
          backgroundColor: Colors.WHITE_COLOR,
          opacity: 1,
          position: 'relative',
          paddingHorizontal: 16,
          paddingVertical: 24,
        }}
      >
        <View
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            zIndex: 1,
            padding: 16,
          }}
        >
          <Images.CROSS_ICON height={15} width={15} />
        </View>
        <View style={{ marginTop: 24, gap: 16, flex: 1, alignItems: 'center' }}>
          <View style={{ alignItems: 'center' }}>
            <Image
              source={Images.MISSING_PERSON}
              style={{ width: 100, height: 100, borderRadius: 100 }}
            />
          </View>
          <View style={{ minWidth: 200, alignItems: 'center' }}>
            <Text style={{ color: Colors.SECONDARY_COLOR }}>Missing Name</Text>
            <Text style={{ color: Colors.SECONDARY_COLOR }}>Age of Person</Text>
            <Text style={{ color: Colors.SECONDARY_COLOR }}>
              Last Scene: Time
            </Text>
            <Text style={{ color: Colors.SECONDARY_COLOR }}>
              Last Scene Location: City Name
            </Text>
          </View>
          <View>
            <TextInput
              placeholder="Location"
              placeholderTextColor={Colors.SECONDARY_COLOR}
              style={{
                width: 295,
                height: 50,
                borderWidth: 1,
                borderColor: Colors.SECONDARY_COLOR,
                borderRadius: 8,
                textAlign: 'left',
                textAlignVertical: 'center',
                padding: 8,
              }}
            />
          </View>
          <View>
            <TextInput
              multiline={true}
              numberOfLines={4}
              placeholder="Description"
              placeholderTextColor={Colors.SECONDARY_COLOR}
              style={{
                width: 295,
                minHeight: 100,
                borderWidth: 1,
                borderColor: Colors.SECONDARY_COLOR,
                borderRadius: 8,
                padding: 8,
                textAlign: 'left',
                textAlignVertical: 'top',
              }}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            gap: 16,
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginTop: 112,
          }}
        >
          <Pressable
            style={{
              width: 300,
              height: 33,
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: Colors.PRIMARY_COLOR,
              borderWidth: 1,
              backgroundColor: Colors.WHITE_COLOR,
            }}
          >
            <Text style={{ color: Colors.SECONDARY_COLOR }}>
              Contact Via Email
            </Text>
          </Pressable>
          <Pressable
            style={{
              width: 300,
              height: 33,
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: Colors.PRIMARY_COLOR,
              borderWidth: 1,
              backgroundColor: Colors.PRIMARY_COLOR,
            }}
          >
            <Text style={{ color: Colors.WHITE_COLOR }}>Report Found</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Modal;
