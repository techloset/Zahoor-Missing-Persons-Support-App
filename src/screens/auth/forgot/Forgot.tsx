import React, { useState } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import { Images } from '../../../constants/constants';
import InputText from '../../../components/inputText/InputText';
import Button from '../../../components/button/Button';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

export default function Forgot() {
  const [email, setEmail] = useState<string>('');
  const navigation = useNavigation();
  const forgotHandler = async () => {
    await auth().sendPasswordResetEmail(email);
    Alert.alert(
      'Reset Code Sent',
      'Please check your email for the reset code.',
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.ScrollView}>
      <View style={styles.rowContainer}>
        <View>
          <Images.BACKSPACE_ICON
            height={24}
            width={24}
            onPress={() => navigation.goBack()}
          />
        </View>
        <Text style={styles.title}>Forgot Password</Text>
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
            <InputText
              icon={false}
              keyboardType="email-address"
              name="Email"
              onChangeText={text => setEmail(text)}
              placeholderText="debra.holt@example.com"
              value={email}
              security={false}
            />
            <Button
              onPressLearnMore={forgotHandler}
              titleText="Send Reset Code"
              accessibilityLabelText="Send Reset Code Button"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
