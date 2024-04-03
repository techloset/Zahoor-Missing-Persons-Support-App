import { SafeAreaView, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Colors, Images } from '../../../constants/Constants';
import TextInputComponent from '../../../components/inputComponents/textInputComponent/TextInputComponent';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Button from '../../../components/inputComponents/buttonComponent/ButtonComponent';
import { styles } from './styles';
import auth from '@react-native-firebase/auth';

export default function Registration() {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const handleCheckboxPress = () => {
    setIsChecked(!isChecked);
  };
  const createUser = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        } else if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });
  };
  return (
    <SafeAreaView style={{ backgroundColor: Colors.WHITE_COLOR }}>
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
            value={fullName}
            onChangeText={setFullName}
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
          validationText="Your password must be 8 character. "
          keyboardType="default"
        />
        <View style={styles.checkboxContainer}>
          <BouncyCheckbox
            size={20}
            onPress={handleCheckboxPress}
            isChecked={isChecked}
            // eslint-disable-next-line react-native/no-inline-styles
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
          onPressLearnMore={createUser}
          titleText="Next"
          accessibilityLabelText="Register Button"
        />
        <Text style={styles.underLineText}>Need Help or Have Questions?</Text>
      </View>
    </SafeAreaView>
  );
}
