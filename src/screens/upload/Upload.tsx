/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  TouchableOpacity,
  Image,
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

import DatePicker from 'react-native-date-picker';
import { Images, Units } from '../../constants/Constants';
import TextInputComponent from '../../components/inputComponents/inputText/InputText';
import { FormData } from '../../types/types';
import { styles } from './styles';

interface DateTimeProps {
  onPress: () => void;
  label: string;
  selectedDate: Date | null;
}

const DateTime = ({ onPress, label, selectedDate }: DateTimeProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.container, {}]}>
    <Text style={styles.name}>{label}</Text>
    <View style={[styles.inputContainer, { height: 50 }]}>
      <Text style={styles.dateColor}>
        {selectedDate ? selectedDate.toDateString() : ' '}
      </Text>
      <View>
        <Images.CALENDER_ICON height={20} width={20} style={styles.image} />
      </View>
    </View>
  </TouchableOpacity>
);

const Upload = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    gender: '',
    dateOfBirth: '',
    nicknames: '',
    height: '',
    width: '',
    eyeColor: '',
    hairColor: '',
    lengthOfTheHair: '',
    lastSeen: '',
  });
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [openDatePicker, setOpenDatePicker] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleChange = (name: string, value: string) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleDateChange = (date: Date) => {
    setOpenDatePicker(false);
    setSelectedDate(date);
    setFormData(prevFormData => ({
      ...prevFormData,
      dateOfBirth: date.toISOString(),
    }));
  };

  const handleSubmit = () => {
    console.log('Submitting Report with:', formData);
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
    } catch (error) {
      console.log('Error in image picker:', error);
    }
  };
  const renderTextInput = (
    name: string,
    placeholder: string,
    keyboardType: 'default' | 'number-pad' | 'email-address' | 'phone-pad',
  ) => (
    <TextInputComponent
      keyboardType={keyboardType}
      name={name}
      value={formData[name as keyof FormData]}
      onChangeText={text => handleChange(name, text)}
      placeholderText={placeholder}
      security={false}
      icon={false}
      validationText=""
    />
  );

  const touchableOpacities = [
    { label: 'Date Of Birth', onPress: () => setOpenDatePicker(true) },
    { label: 'Last Seen', onPress: () => setOpenDatePicker(true) },
  ];

  return (
    <ScrollView style={styles.main}>
      <View style={styles.mainContainer}>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>
            Basic Details of Missing Person
          </Text>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            {renderTextInput('Missing Person’s Full Name', '', 'default')}
            {renderTextInput('Gender', ' ', 'default')}
            {touchableOpacities.map((item, index) => (
              <DateTime
                key={index}
                label={item.label}
                onPress={item.onPress}
                selectedDate={selectedDate}
              />
            ))}
            {renderTextInput('Nickname or know aliases', ' ', 'default')}
            {renderTextInput('Last Seen Location', ' ', 'default')}
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>Physical Description</Text>
          <View>
            {renderTextInput('Height', '', 'number-pad')}
            {renderTextInput('Width', '', 'number-pad')}
            {renderTextInput('Eye Color', '', 'default')}
            {renderTextInput('Hair Color', '', 'default')}
            {renderTextInput('Length of the Hair', '', 'number-pad')}
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
            <Text style={styles.submitText}>Submit Report</Text>
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
