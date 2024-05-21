import { useEffect, useState } from 'react';
import { calculateAge } from '../utils/formateDate';
import useProfile from './useProfile';
import { ModalProps } from '../types/types';
import { Alert, Keyboard, Linking } from 'react-native';
import {
  reportMissingPerson,
  getEmailHandler,
} from '../store/slices/firestoreSlice';
import { RootState, useAppDispatch, useAppSelector } from '../store/store';

export const useReport = ({ onClose, data }: ModalProps) => {
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const age = calculateAge(data?.dateOfBirth);
  const { userProfile } = useProfile();
  const dispatch = useAppDispatch();
  const userEmail = useAppSelector(
    (state: RootState) => state.firestore.userProfile?.email,
  );

  const [modalData, setModalData] = useState({
    location: '',
    description: '',
  });

  const emailHandler = async () => {
    if (!userEmail) {
      await dispatch(getEmailHandler(data?.userID || ''));
      return;
    }

    Linking.openURL(`mailto:${userEmail}`);
  };

  const handleReportFound = async () => {
    try {
      await dispatch(
        reportMissingPerson({
          data,
          location: modalData.location,
          description: modalData.description,
          userProfile,
          visible: false,
          onClose,
        }),
      );
      onClose();
    } catch (error) {
      console.error('Error reporting missing person:', error);
      Alert.alert('Error', 'Failed to report missing person');
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
