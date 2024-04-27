import { useEffect, useState } from 'react';
import { calculateAge } from '../utils/formateDate';
import useProfile from './useProfile';
import firestore from '@react-native-firebase/firestore';
import { ModalProps, User } from '../types/types';
import { Alert, Keyboard, Linking } from 'react-native';

export const useReport = ({ onClose, data }: ModalProps) => {
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const age = calculateAge(data?.dateOfBirth.toDate());
  const { userProfile } = useProfile();

  const [modalData, setModalData] = useState({
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
      if (userData.email === userProfile?.email) {
        Alert.alert('Error', 'You cannot report your own missing person');
        return;
      }
      const missingPersonSnapshot = await firestore()
        .collection('MissingPerson')
        .where('id', '==', data?.id)
        .get();
      if (!missingPersonSnapshot.empty) {
        const missingPersonDoc = missingPersonSnapshot.docs[0];
        await missingPersonDoc.ref.update({
          reportLocation: modalData.location,
          reportDescription: modalData.description,
          reportedBy: userProfile?.displayName!,
          reportedByEmail: userProfile?.email!,
        });

        Alert.alert('Success', 'Reported Successfully');
      } else {
        Alert.alert('Error', 'Missing person not found');
      }

      setModalData({ location: '', description: '' });
      onClose();
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };

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

  const handleReportFound = () => {
    handleUpdate();
    onClose();
  };
  return {
    age,
    emailHandler,
    handleLocationChange,
    handleDescriptionChange,
    handleReportFound,
    keyboardOpen,
    modalData,
    setModalData,
  };
};
export default useReport;
