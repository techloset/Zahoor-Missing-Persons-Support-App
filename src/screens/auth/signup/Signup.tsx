/* eslint-disable react-native/no-inline-styles */
import { ScrollView, Text, View } from 'react-native';
import React from 'react';
import InputText from '../../../components/inputText/InputText';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Button from '../../../components/button/Button';
import { styles } from './styles';
import { Colors, Images } from '../../../constants/constants';
import { useSignup } from '../../../hooks/useSignup';

export default function Signup() {
  const {
    displayName,
    setDisplayName,
    email,
    setEmail,
    password,
    setPassword,
    isChecked,
    setIsChecked,
    handleCreateUser,
  } = useSignup();

  return (
    <ScrollView>
      <View style={styles.imageStyles}>
        <Images.VECTOR_ROUNDED_DIAGRAM width={302} height={259} />
      </View>
      <View style={styles.container}>
        <Text style={styles.heading}>Findr</Text>
        <Text style={styles.caption}>Join the Search for Hope</Text>
      </View>
      <View style={styles.form}>
        <View>
          <InputText
            icon={false}
            name="Full Name"
            value={displayName}
            onChangeText={setDisplayName}
            placeholderText="Jane Cooper"
            keyboardType="default"
          />
          <InputText
            icon={true}
            name="Email"
            value={email}
            onChangeText={setEmail}
            placeholderText="debra.holt@example.com"
            validationText="Your email address is your username."
            keyboardType="email-address"
          />
        </View>
        <InputText
          icon={false}
          name="Password"
          security={true}
          value={password}
          onChangeText={setPassword}
          placeholderText="*************"
          validationText={
            password.length < 8 && password.length > 0
              ? 'Your password must be 8 characters.'
              : ''
          }
          keyboardType="default"
          isError={true}
        />
        <View style={styles.checkboxContainer}>
          <BouncyCheckbox
            size={20}
            onPress={() => setIsChecked(!isChecked)}
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
        <View style={styles.submit}>
          <Button
            onPressLearnMore={handleCreateUser}
            titleText="Next"
            accessibilityLabelText="Register Button"
          />
        </View>
        <Text style={styles.underLineText}>Need Help or Have Questions?</Text>
      </View>
    </ScrollView>
  );
}
