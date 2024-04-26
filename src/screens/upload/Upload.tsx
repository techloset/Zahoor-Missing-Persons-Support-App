/* eslint-disable no-catch-shadow */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import { RootState } from '../../store/store';
import DatePicker from 'react-native-date-picker';
// import DateTimePicker from '@react-native-community/datetimepicker';
import InputText from '../../components/inputText/InputText';
import { styles } from './styles';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { Images, Units } from '../../constants/constants';
import {
  updateFormData,
  uploadToFirestore,
} from '../../store/slices/firestoreSlice';
import imagePicker from '../../utils/imagePicker';

const Upload = () => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector(
    (state: RootState) => state.firestore.formData,
  );
  const loading = useAppSelector((state: RootState) => state.firestore.loading);
  const error = useAppSelector((state: RootState) => state.firestore.error);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [openDobPicker, setOpenDobPicker] = useState<boolean>(false);
  const [openLastSeenPicker, setOpenLastSeenPicker] = useState<boolean>(false);
  const [dob, setDob] = useState<Date | null>(null);
  const [lastSeen, setLastSeen] = useState<Date | null>(null);

  const handleChange = (name: keyof typeof formData, value: string) => {
    dispatch(updateFormData({ [name]: value }));
  };

  const handleOpenDobPicker = () => {
    setOpenDobPicker(true);
  };

  const handleOpenLastSeenPicker = () => {
    setOpenLastSeenPicker(true);
  };
  const handleDob = (date: Date) => {
    setOpenDobPicker(false);
    setDob(date);
    dispatch(updateFormData({ dateOfBirth: date }));
  };

  const handleLastSeen = (date: Date) => {
    setOpenLastSeenPicker(false);
    setLastSeen(date);
    dispatch(updateFormData({ lastSeen: date }));
  };

  const handleSubmit = () => {
    dispatch(uploadToFirestore({ selectedImage, formData }));
  };

  const handleImagePicker = async () => {
    try {
      await imagePicker(setSelectedImage);
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };

  return (
    <ScrollView style={styles.main}>
      <View style={styles.mainContainer}>
        {error && <Text>{error}</Text>}
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>
            Basic Details of Missing Person
          </Text>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <InputText
              name="Missing Person's Full Name"
              value={formData.name}
              onChangeText={text => handleChange('name', text)}
              placeholderText="Missing Person’s Full Name"
              keyboardType="default"
              security={false}
              icon={false}
              validationText=""
            />
            <InputText
              name="Gender"
              value={formData.gender}
              onChangeText={text => handleChange('gender', text)}
              placeholderText="Male , Female or Trans"
              keyboardType="default"
              security={false}
              icon={false}
              validationText=""
            />
            <TouchableOpacity
              onPress={handleOpenDobPicker}
              style={[styles.container, {}]}
            >
              <Text style={styles.name}>Date Of Birth</Text>
              <View style={[styles.inputContainer, { height: 50 }]}>
                <Text style={styles.dateColor}>
                  {dob ? dob.toDateString() : ' '}
                </Text>
                <View>
                  <Images.CALENDER_ICON
                    height={20}
                    width={20}
                    style={styles.image}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleOpenLastSeenPicker}
              style={[styles.container, {}]}
            >
              <Text style={styles.name}>Last Seen</Text>
              <View style={[styles.inputContainer, { height: 50 }]}>
                <Text style={styles.dateColor}>
                  {lastSeen ? lastSeen.toDateString() : ' '}
                </Text>
                <View>
                  <Images.CALENDER_ICON
                    height={20}
                    width={20}
                    style={styles.image}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <InputText
              name="Nicknames or know aliases"
              value={formData.nicknames}
              onChangeText={text => handleChange('nicknames', text)}
              placeholderText="Nickname or know aliases"
              keyboardType="default"
              security={false}
              icon={false}
              validationText=""
            />
            <InputText
              name="Last Seen Location"
              value={formData.lastSeenLocation}
              onChangeText={text => handleChange('lastSeenLocation', text)}
              placeholderText="Last Seen Location"
              keyboardType="default"
              security={false}
              icon={false}
              validationText=""
            />
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>Physical Description</Text>
          <View>
            <InputText
              name="Height"
              value={formData.height}
              onChangeText={text => handleChange('height', text)}
              placeholderText="Height"
              keyboardType="number-pad"
              security={false}
              icon={false}
              validationText=""
            />
            <InputText
              name="Width"
              value={formData.width}
              onChangeText={text => handleChange('width', text)}
              placeholderText="Width"
              keyboardType="number-pad"
              security={false}
              icon={false}
              validationText=""
            />
            <InputText
              name="Eye Color"
              value={formData.eyeColor}
              onChangeText={text => handleChange('eyeColor', text)}
              placeholderText="Eye Color"
              keyboardType="default"
              security={false}
              icon={false}
              validationText=""
            />
            <InputText
              name="Hair Color"
              value={formData.hairColor}
              onChangeText={text => handleChange('hairColor', text)}
              placeholderText="Hair Color"
              keyboardType="default"
              security={false}
              icon={false}
              validationText=""
            />
            <InputText
              name="Length of the Hair"
              value={formData.lengthOfTheHair}
              onChangeText={text => handleChange('lengthOfTheHair', text)}
              placeholderText="Length of the Hair"
              keyboardType="number-pad"
              security={false}
              icon={false}
              validationText=""
            />
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>Upload Photographs</Text>
          <TouchableOpacity onPress={() => handleImagePicker()}>
            <Images.UPLOADER_IMAGE
              height={Units.WINDOW_HEIGHT * 0.2126}
              width={Units.WINDOW_WIDTH * 0.8933}
            />
          </TouchableOpacity>
        </View>
        {selectedImage ? (
          <Image
            source={{ uri: selectedImage }}
            style={{
              width: Units.WINDOW_WIDTH * 0.8933,
              height: Units.WINDOW_HEIGHT * 0.2126,
              objectFit: 'cover',
            }}
            resizeMode="cover"
          />
        ) : null}
        <View style={styles.submitContainer}>
          <Pressable onPress={handleSubmit} style={styles.submitButton}>
            <Text style={styles.submitText}>
              {loading ? 'Submitting...' : 'Submit Report'}
            </Text>
          </Pressable>
        </View>
      </View>
      {openDobPicker && (
        <DatePicker
          modal
          mode="date"
          open={openDobPicker}
          date={dob || new Date()}
          onConfirm={handleDob}
          onCancel={() => setOpenDobPicker(false)}
        />
      )}
      {openLastSeenPicker && (
        <DatePicker
          modal
          mode="date"
          open={openLastSeenPicker}
          date={lastSeen || new Date()}
          onConfirm={handleLastSeen}
          onCancel={() => setOpenLastSeenPicker(false)}
        />
      )}
    </ScrollView>
  );
};

export default Upload;
