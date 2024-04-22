/* eslint-disable curly */
import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import { Colors, Images, Units } from '../../constants/constants';
import { FormData } from '../../types/types';
import firestore from '@react-native-firebase/firestore';

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  data: FormData | null;
}

const Modal = ({ visible, onClose, data }: ModalProps) => {
  if (!visible) return null;

  const handleEmail = async () => {
    const doc = await firestore().collection('Users').doc(data?.userID).get();
    console.log(doc);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.closeButton}>
          <Images.CROSS_ICON height={15} width={15} onPress={onClose} />
        </View>
        <View style={styles.content}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: data?.imageUrl }} style={styles.image} />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>{data?.name}</Text>
            <Text style={styles.infoText}>
              {String(data?.dateOfBirth).split('T')[0]} Years Old {data?.gender}
            </Text>
            <Text style={styles.infoText}>
              Last Seen:{' '}
              {String(data?.lastSeen).split('T')[0] &&
              String(data?.lastSeen).split('T')[0].length > 12
                ? `${String(data?.lastSeen).split('T')[0].slice(0, 12)}...`
                : String(data?.lastSeen).split('T')[0]}
            </Text>
            <Text style={styles.infoText}>
              Last Seen Location: {data?.lastSeenLocation}
            </Text>
          </View>
          <View style={styles.locationInputContainer}>
            <TextInput
              placeholder="Location"
              placeholderTextColor={Colors.SECONDARY_COLOR}
              style={[styles.input, styles.locationInput]}
            />
          </View>
          <View style={styles.descriptionInputContainer}>
            <TextInput
              multiline={true}
              numberOfLines={4}
              placeholder="Description"
              placeholderTextColor={Colors.SECONDARY_COLOR}
              style={[styles.input, styles.descriptionInput]}
            />
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <Pressable style={styles.button} onPress={() => handleEmail()}>
            <Text style={styles.buttonText}>Contact Via Email</Text>
          </Pressable>
          <Pressable
            style={[styles.button, { backgroundColor: Colors.PRIMARY_COLOR }]}
          >
            <Text style={[styles.buttonText, { color: Colors.WHITE_COLOR }]}>
              Report Found
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Units.WINDOW_HEIGHT,
    width: Units.WINDOW_WIDTH,
    backgroundColor: 'rgba(0, 0, 0, 0.67)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
  },
  innerContainer: {
    width: 335,
    height: 581,
    borderRadius: 20,
    backgroundColor: Colors.WHITE_COLOR,
    opacity: 1,
    position: 'relative',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1,
    padding: 16,
  },
  content: {
    marginTop: 24,
    gap: 16,
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  infoContainer: {
    minWidth: 200,
    alignItems: 'center',
  },
  infoText: {
    color: Colors.SECONDARY_COLOR,
  },
  locationInputContainer: {
    width: 295,
    marginBottom: 16,
  },
  descriptionInputContainer: {
    width: 295,
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: Colors.SECONDARY_COLOR,
    borderRadius: 8,
    textAlign: 'left',
    textAlignVertical: 'center',
    padding: 8,
  },
  locationInput: {},
  descriptionInput: {
    minHeight: 100,
    textAlignVertical: 'top',
    paddingVertical: 8,
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 112,
    marginBottom: 16,
  },
  button: {
    width: 300,
    height: 33,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.PRIMARY_COLOR,
    borderWidth: 1,
    backgroundColor: Colors.WHITE_COLOR,
    marginBottom: 8,
  },
  buttonText: {
    color: Colors.SECONDARY_COLOR,
  },
});

export default Modal;
