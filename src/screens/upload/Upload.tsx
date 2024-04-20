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
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import DatePicker from 'react-native-date-picker';
import TextInputComponent from '../../components/inputText/InputText';
import { styles } from './styles';
import { useAppDispatch, useAppSelector } from '../../store/store';
import * as ImagePicker from 'react-native-image-picker';
import { Images, Units } from '../../constants/constants';
import { uploadToFirestore } from '../../store/slices/firestoreSlice';

const Upload = () => {
  const dispatch = useAppDispatch();
  const formData = useSelector((state: RootState) => state.firestore.formData);
  const loading = useAppSelector((state: RootState) => state.firestore.loading);
  const error = useAppSelector((state: RootState) => state.firestore.error);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [openDatePicker, setOpenDatePicker] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleChange = (name: keyof typeof formData, value: string) => {
    dispatch(uploadToFirestore({ [name]: value }));
  };

  const handleDateChange = (date: Date) => {
    setOpenDatePicker(false);
    setSelectedDate(date);
    dispatch(uploadToFirestore({ dateOfBirth: date, lastSeen: date }));
  };

  const handleSubmit = () => {
    dispatch(uploadToFirestore({ selectedImage, formData }));
  };

  const imagePicker = async () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      mediaType: 'photo',
      quality: 1,
    } as ImagePicker.ImageLibraryOptions;

    try {
      const res = await ImagePicker.launchImageLibrary(
        options,
        (response: ImagePicker.ImagePickerResponse) => {
          if (!response.didCancel) {
            const selectedImgUri = response.assets?.[0]?.uri;
            if (selectedImgUri) {
              setSelectedImage(selectedImgUri);
            }
          }
        },
      );
      console.log(res);
    } catch (error) {
      console.log('Error in image picker:', error);
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
            <TextInputComponent
              name="Missing Person's Full Name"
              value={formData.name}
              onChangeText={text => handleChange('name', text)}
              placeholderText="Missing Person’s Full Name"
              keyboardType="default"
              security={false}
              icon={false}
              validationText=""
            />
            <TextInputComponent
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
              onPress={() => setOpenDatePicker(true)}
              style={[styles.container, {}]}
            >
              <Text style={styles.name}>Date Of Birth</Text>
              <View style={[styles.inputContainer, { height: 50 }]}>
                <Text style={styles.dateColor}>
                  {selectedDate ? selectedDate.toDateString() : ' '}
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
              onPress={() => setOpenDatePicker(true)}
              style={[styles.container, {}]}
            >
              <Text style={styles.name}>Last Seen</Text>
              <View style={[styles.inputContainer, { height: 50 }]}>
                <Text style={styles.dateColor}>
                  {selectedDate ? selectedDate.toDateString() : ' '}
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
            <TextInputComponent
              name="Nicknames or know aliases"
              value={formData.nicknames}
              onChangeText={text => handleChange('nicknames', text)}
              placeholderText="Nickname or know aliases"
              keyboardType="default"
              security={false}
              icon={false}
              validationText=""
            />
            <TextInputComponent
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
            <TextInputComponent
              name="Height"
              value={formData.height}
              onChangeText={text => handleChange('height', text)}
              placeholderText="Height"
              keyboardType="number-pad"
              security={false}
              icon={false}
              validationText=""
            />
            <TextInputComponent
              name="Width"
              value={formData.width}
              onChangeText={text => handleChange('width', text)}
              placeholderText="Width"
              keyboardType="number-pad"
              security={false}
              icon={false}
              validationText=""
            />
            <TextInputComponent
              name="Eye Color"
              value={formData.eyeColor}
              onChangeText={text => handleChange('eyeColor', text)}
              placeholderText="Eye Color"
              keyboardType="default"
              security={false}
              icon={false}
              validationText=""
            />
            <TextInputComponent
              name="Hair Color"
              value={formData.hairColor}
              onChangeText={text => handleChange('hairColor', text)}
              placeholderText="Hair Color"
              keyboardType="default"
              security={false}
              icon={false}
              validationText=""
            />
            <TextInputComponent
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
          <TouchableOpacity onPress={() => imagePicker()}>
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
              {loading ? 'Loading...' : 'Submit Report'}
            </Text>
          </Pressable>
        </View>
      </View>
      {openDatePicker && (
        <DatePicker
          modal
          open={openDatePicker}
          date={selectedDate || new Date()}
          onConfirm={date => handleDateChange(date)}
          onCancel={() => setOpenDatePicker(false)}
        />
      )}
    </ScrollView>
  );
};

export default Upload;
