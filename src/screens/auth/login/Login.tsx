/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Colors, Images, Units } from '../../../constants/constants';
import InputText from '../../../components/inputText/InputText';
import Button from '../../../components/button/Button';
import { styles } from './styles';
import { useLogin } from '../../../hooks/useLogin';

const Login = () => {
  const {
    navigation,
    email,
    setEmail,
    password,
    setPassword,
    loginHandler,
    onGoogleButtonPress,
    loading,
  } = useLogin();

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
          <InputText
            icon={true}
            name="Email"
            value={email}
            onChangeText={setEmail}
            placeholderText="debra.holt@example.com"
            validationText="Your email address is your username."
            keyboardType="email-address"
          />
          <InputText
            icon={false}
            name="Password"
            value={password}
            onChangeText={setPassword}
            security={true}
            placeholderText="**************"
            validationText={
              password.length < 8 && password.length > 0
                ? 'Your password must be 8 characters.'
                : ''
            }
            keyboardType="default"
            isError={true}
          />
        </View>
      </View>
      <View style={styles.lastLayout}>
        <View style={{ alignItems: 'center' }}>
          <Button
            onPressLearnMore={loginHandler}
            titleText={loading ? 'Loading...' : 'Log in'}
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
              onPress={() => [onGoogleButtonPress()]}
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
