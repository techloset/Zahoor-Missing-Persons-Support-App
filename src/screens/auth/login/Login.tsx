/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Colors, Images, Units } from '../../../constants/Constants';
import TextInputComponent from '../../../components/inputComponents/textInputComponent/TextInputComponent';
import Button from '../../../components/inputComponents/button/Button';
import { styles } from './styles';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const loginHandler = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User successfully signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/user-not-found') {
          console.log('User not found. Please check your credentials.');
        } else if (error.code === 'auth/wrong-password') {
          console.log('Incorrect password. Please try again.');
        } else {
          console.error(error);
        }
      });
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors.WHITE_COLOR,
        height: Units.WINDOW_HEIGHT,
      }}
    >
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <Images.LOGO width={167} height={96} />
        </View>
        <Text style={styles.welcome}>Welcome Back</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.formSection}>
          <TextInputComponent
            icon={true}
            name="Email"
            value={email}
            onChangeText={setEmail}
            placeholderText="debra.holt@example.com"
            validationText="Your email address is your username."
            keyboardType="email-address"
          />
          <TextInputComponent
            icon={false}
            name="Password"
            value={password}
            onChangeText={setPassword}
            security={true}
            placeholderText="**************"
            validationText="Your password must be 8 character. "
            keyboardType="default"
          />
        </View>
      </View>
      <View style={styles.lastLayout}>
        <View style={{ alignItems: 'center' }}>
          <Button
            onPressLearnMore={loginHandler}
            titleText="Log in"
            accessibilityLabelText="Login Button"
          />
        </View>
        <View style={styles.forgotInfo}>
          <Text
            style={styles.forgotText}
            onPress={() => navigation.navigate('Forgot')}
          >
            Forget your password
          </Text>
          <Text style={styles.divider}>|</Text>
          <Text
            style={styles.registerText}
            onPress={() => navigation.navigate('Registration')}
          >
            Register for an account
          </Text>
        </View>
        <View style={styles.separatorContainer}>
          <View style={styles.separator} />
          <Text style={styles.orText}>or</Text>
          <View style={styles.separator} />
        </View>
        <View style={styles.googleContainer}>
          <View style={styles.googleButton}>
            <Images.GOOGLE_IMAGE
              height={34}
              width={34}
              // onPress={() =>
              //   onGoogleButtonPress().then(() =>
              //     console.log('Signed in with Google!'),
              //   )
              // }
            />
          </View>
        </View>
        <View style={styles.vectorDiagramContainer}>
          <Images.VECTOR_DIAGRAM_LOGIN width={158} height={155} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
