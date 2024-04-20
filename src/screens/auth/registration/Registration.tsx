/* eslint-disable react-native/no-inline-styles */
import { ScrollView, Text, View } from 'react-native';
import React, { useState } from 'react';
import TextInputComponent from '../../../components/inputText/InputText';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Button from '../../../components/button/Button';
import { styles } from './styles';
import { Colors, Images } from '../../../constants/constants';
import { useAppDispatch } from '../../../store/store';
import { createUser, uploadUser } from '../../../store/slices/authSlice';

export default function Registration() {
  const [displayName, setDisplayName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const dispatch = useAppDispatch();

  const handleCreateUser = () => {
    dispatch(createUser({ email, password }));
    dispatch(uploadUser({ displayName, email, photoURL: '' }));
  };

  return (
    <ScrollView style={{}}>
      {/* {error && <Text>{error}</Text>} */}
      <View style={styles.imageStyles}>
        <Images.VECTOR_ROUNDED_DIAGRAM width={302} height={259} />
      </View>
      <View style={styles.container}>
        <Text style={styles.heading}>Findr</Text>
        <Text style={styles.caption}>Join the Search for Hope</Text>
      </View>
      <View style={styles.form}>
        <View>
          <TextInputComponent
            icon={false}
            name="Full Name"
            value={displayName}
            onChangeText={setDisplayName}
            placeholderText="Jane Cooper"
            keyboardType="default"
          />
          <TextInputComponent
            icon={true}
            name="Email"
            value={email}
            onChangeText={setEmail}
            placeholderText="debra.holt@example.com"
            validationText="Your email address is your username."
            keyboardType="email-address"
          />
        </View>
        <TextInputComponent
          icon={false}
          name="Password"
          security={true}
          value={password}
          onChangeText={setPassword}
          placeholderText="*************"
          validationText="Your password must be 8 characters."
          keyboardType="default"
        />
        <View style={styles.checkboxContainer}>
          <BouncyCheckbox
            size={20}
            onPress={() => setIsChecked(!isChecked)} // Updated handleCheckboxPress to setIsChecked
            isChecked={isChecked}
            innerIconStyle={{
              borderColor: Colors.SECONDARY_COLOR,
              borderRadius: 3,
              padding: 0,
              backgroundColor: isChecked
                ? Colors.SECONDARY_COLOR
                : Colors.WHITE_COLOR,
            }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.checkboxText}>Remember me</Text>
            <Text style={styles.textStyle}>
              Save my login details for next time.
            </Text>
          </View>
        </View>
        <Button
          onPressLearnMore={handleCreateUser}
          titleText="Next"
          accessibilityLabelText="Register Button"
        />
        <Text style={styles.underLineText}>Need Help or Have Questions?</Text>
      </View>
    </ScrollView>
  );
}
