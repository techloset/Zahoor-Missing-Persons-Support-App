import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Images } from '../../../constants/Constants';
import TextInputComponent from '../../../components/inputComponents/textInputComponent/TextInputComponent';
import Button from '../../../components/inputComponents/buttonComponent/ButtonComponent';
import { styles } from './styles';

export default function Forgot() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.rowContainer}>
        <View>
          <Images.BACKSPACE_ICON height={24} width={24} />
        </View>
        <Text style={styles.title}>Forgot</Text>
      </View>
      <View style={styles.imageContainer}>
        <Images.THINKING_VECTOR height={206} width={296} />
      </View>
      <View style={styles.container}>
        <View style={styles.centeredView}>
          <View style={styles.innerContainer}>
            <Text style={styles.descriptionText}>
              Please enter the email address associated with your account. We'll
              send you a verification code to reset your password.
            </Text>
            <TextInputComponent
              icon={false}
              keyboardType="email-address"
              name="Email"
              onChangeText={() => {}}
              placeholderText="debra.holt@example.com"
              value=""
              security={false}
            />
            <Button
              onPressLearnMore={() => {}}
              titleText="Send Reset Code"
              accessibilityLabelText="Send Reset Code Button"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
