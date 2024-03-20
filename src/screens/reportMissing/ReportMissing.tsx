/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  ScrollView,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
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
            <TouchableOpacity style={styless.container}>
              <Text style={styless.name}>Date Of Birth</Text>
              <View style={styless.inputContainer}>
                <View>
                  <Images.CALENDER_ICON
                    height={20}
                    width={20}
                    style={styless.image}
                  />
                </View>
              </View>
            </TouchableOpacity>
            {renderTextInput('Nickname or know aliases', ' ', 'default')}
            {renderTextInput('Last Seen Location', ' ', 'default')}
            {renderTextInput('Last Seen', ' ', 'default')}
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
        <View style={{ flexDirection: 'column', gap: 16 }}>
          <Text style={styles.detailsTitle}>Upload Photographs</Text>
          <TouchableOpacity>
            <Images.UPLOADER_IMAGE height={173} width={335} />
          </TouchableOpacity>
        </View>
        <View style={styles.submitContainer}>
          <Pressable onPress={handleSubmit} style={styles.submitButton}>
            <Text style={styles.submitText}>Submit Report</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default ReportMissing;
const styless = StyleSheet.create({
  input: {
    width: '100%',
    height: 'auto',
    paddingVertical: 10,

    paddingRight: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.BORDER_COLOR,
    marginBottom: 8,
    color: Colors.SECONDARY_COLOR,
  },
  name: {
    color: Colors.SECONDARY_COLOR,
    width: 'auto',
    height: 20,
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: 'left',
  },
  container: {
    width: 335,
    height: 'auto',
  },
  inputContainer: {
    borderColor: Colors.BORDER_COLOR,
    height: 44,
    width: 308,
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 1,
    marginBottom: 6,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    paddingRight: 14,
  },
  image: {
    width: 16.67,
    height: 13.33,
    // top: 3.33,
    left: -10,
    borderWidth: 1.67,
  },
  textStyle: {
    width: 308,
    height: 20,
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: 'left',
  },
});
