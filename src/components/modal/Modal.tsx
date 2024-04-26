/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  StyleSheet,
  Linking,
  Alert,
  Modal as RNModal,
  Keyboard,
} from 'react-native';
import { Colors, Images, Units } from '../../constants/constants';
import { FormData, User } from '../../types/types';
import firestore from '@react-native-firebase/firestore';
import { updateMissingPerson } from '../../store/slices/firestoreSlice';

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  data: FormData | null;
}
type ModalDataUpdate = {
  location: string;
  description: string;
};

const Modal = ({ visible, onClose, data }: ModalProps) => {
  const [modalData, setModalData] = useState<ModalDataUpdate>({
    location: '',
    description: '',
  });

  const emailHandler = async () => {
    const userSnapshot = await firestore()
      .collection('Users')
      .doc(data?.userID)
      .get();
    const user = userSnapshot.data() as User;
    if (user.email) {
      Linking.openURL(`mailto:${user.email}`);
    } else {
      Alert.alert('Error', 'User email not found');
    }
  };

  const handleUpdate = async () => {
    try {
      const user = await firestore()
        .collection('Users')
        .doc(data?.userID)
        .get();
      const userData = user.data() as User;
      await updateMissingPerson({
        id: data?.id!,
        reportLocation: modalData.location,
        reportDescription: modalData.description,
        reportedBy: userData.displayName!,
      });
      setModalData({ location: '', description: '' });
      onClose();
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };

  const [keyboardOpen, setKeyboardOpen] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardOpen(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardOpen(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleLocationChange = (text: string) => {
    setModalData({ ...modalData, location: text });
  };

  const handleDescriptionChange = (text: string) => {
    setModalData({ ...modalData, description: text });
  };

  // Call this function when the "Report Found" button is pressed
  const handleReportFound = () => {
    handleUpdate();
    onClose();
  };

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
                {String(data?.dateOfBirth).split('T')[0]} Years Old{' '}
                {data?.gender}
              </Text>
              <Text style={styles.infoText}>
                Last Seen: {String(data?.lastSeen).split('T')[0]}
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

const styles = StyleSheet.create({
  container: {
    minHeight: Units.WINDOW_HEIGHT,
    width: Units.WINDOW_WIDTH,
    backgroundColor: Colors.BACKGROUND_COLOR,
    flex: 1,
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
  },
  innerContainer: {
    width: (335 * Units.WINDOW_WIDTH) / 375,
    height: (581 * Units.WINDOW_HEIGHT) / 812,
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
    marginBottom: 0,
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
    color: Colors.SECONDARY_COLOR,
  },
  locationInput: {},
  descriptionInput: {
    minHeight: 100,
    textAlignVertical: 'top',
    paddingVertical: 8,
    color: Colors.SECONDARY_COLOR,
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
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
