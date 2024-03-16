/* eslint-disable react-native/no-inline-styles */
import { View, Text, ScrollView, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Colors, Images } from '../../constants/Constants';
import { styles } from './Styles';
import TextInputComponent from '../../components/inputComponents/textInputComponent/TextInputComponent';
import { FormData } from '../../types/types';

const ReportMissing = () => {
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
  });

  const handleChange = (name: string, value: string) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log('Submitting Report with:', formData);
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
  return (
    <ScrollView style={styles.main}>
      {/* Header */}
      <View style={styles.rowContainer}>
        <View>
          <Images.BACKSPACE_ICON height={24} width={24} />
        </View>
        <Text style={styles.title}>Missing Person Details</Text>
      </View>

      {/* Basic Details */}
      <View style={styles.mainContainer}>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>
            Basic Details of Missing Person
          </Text>
          <View>
            {renderTextInput('Missing Person’s Full Name', '', 'default')}
            {renderTextInput('Gender', ' ', 'default')}
            {/* {renderTextInput('Date of Birth', ' ', 'default')} */}
            {renderTextInput('Nickname or know aliases', ' ', 'default')}
          </View>
        </View>

        {/* Physical Description */}
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
      </View>

      {/* Upload Photographs */}
      <View>
        <Text>Upload Photographs</Text>
      </View>

      {/* Submit Button */}
      <View style={styles.submitContainer}>
        <Pressable onPress={handleSubmit} style={styles.submitButton}>
          <Text style={{ color: Colors.SECONDARY_COLOR }}>Submit Report</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default ReportMissing;
