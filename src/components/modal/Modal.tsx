/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  Modal as RNModal,
} from 'react-native';
import { Colors, Images } from '../../constants/constants';
import { ModalProps } from '../../types/types';
import useReport from '../../hooks/useReport';
import { formatDate } from '../../utils/formateDate';
import { styles } from './styles';

const Modal = ({ visible, onClose, data }: ModalProps) => {
  const {
    age,
    emailHandler,
    handleLocationChange,
    handleDescriptionChange,
    handleReportFound,
    keyboardOpen,
    modalData,
  } = useReport({
    visible,
    onClose,
    data,
  });

  return (
    <RNModal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View
        style={[
          styles.container,
          { paddingTop: keyboardOpen ? -50 : 0 },
          !keyboardOpen && { justifyContent: 'center' },
        ]}
      >
        <View style={styles.innerContainer}>
          <View style={styles.closeButton}>
            <Pressable onPress={onClose}>
              <Images.CROSS_ICON height={15} width={15} />
            </Pressable>
          </View>
          <View style={styles.content}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: data?.imageUrl }} style={styles.image} />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>{data?.name}</Text>
              <Text style={styles.infoText}>
                {age} Years Old {data?.gender}
              </Text>
              <Text style={styles.infoText}>
                Last Seen: {data?.lastSeen ? formatDate(data.lastSeen) : ''}
              </Text>
              <Text style={styles.infoText}>
                Last Seen Location: {data?.lastSeenLocation}
              </Text>
            </View>
            <View style={styles.locationInputContainer}>
              <TextInput
                placeholder="Location"
                placeholderTextColor={Colors.SECONDARY_COLOR}
                style={styles.input}
                value={modalData.location}
                onChangeText={handleLocationChange}
              />
            </View>
            <View style={styles.descriptionInputContainer}>
              <TextInput
                multiline={true}
                numberOfLines={4}
                placeholder="Description"
                placeholderTextColor={Colors.SECONDARY_COLOR}
                style={[styles.input, styles.descriptionInput]}
                value={modalData.description}
                onChangeText={handleDescriptionChange}
              />
            </View>
          </View>
          <View style={styles.buttonsContainer}>
            <Pressable style={styles.button} onPress={() => emailHandler()}>
              <Text style={styles.buttonText}>Contact Via Email</Text>
            </Pressable>
            <Pressable
              style={[styles.button, { backgroundColor: Colors.PRIMARY_COLOR }]}
              onPress={handleReportFound}
            >
              <Text style={[styles.buttonText, { color: Colors.WHITE_COLOR }]}>
                Report Found
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </RNModal>
  );
};

export default Modal;
