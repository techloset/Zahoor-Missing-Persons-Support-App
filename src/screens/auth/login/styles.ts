import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../../constants/Constants';

// Get the screen dimensions
const { width, height } = Dimensions.get('window');

// Calculate the dynamic units
const dynamicWidth = width * 0.8213; // 308 / 375
const dynamicHeight = height * 0.2334; // 190 / 812
const dynamicTop = height * 0.2084; // 170 / 812
const dynamicLastLayoutHeight = height * 0.2793; // 227 / 812

export const styles = StyleSheet.create({
  logoContainer: {
    width: 'auto',
    height: 96,
    alignSelf: 'center',
    alignContent: 'center',
    marginTop: height * 0.0319, // 26 / 812
    gap: 24,
  },
  logo: {
    width: 167,
    height: 96,
    alignSelf: 'center',
    marginTop: height * 0.0319, // 26 / 812
  },
  name: {
    fontSize: 14,
    color: Colors.SECONDARY_COLOR,
    fontWeight: '500',
    marginBottom: 6,
  },
  welcome: {
    fontSize: 45,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: Colors.SECONDARY_COLOR,
  },
  input: {
    marginHorizontal: 16,
  },
  container: {
    width: dynamicWidth,
    height: dynamicHeight,
    borderColor: Colors.SECONDARY_COLOR,
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },
  textStyle: {
    width: dynamicWidth,
    height: 20,
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: 'left',
    color: Colors.SECONDARY_COLOR,
  },
  formSection: {
    width: dynamicWidth,
    height: height * 0.5539, // 450 / 812
    marginBottom: height * 0.0418, // 34 / 812
    justifyContent: 'center',
  },
  lastLayout: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'center',
    top: dynamicTop,
    width: 'auto',
    height: dynamicLastLayoutHeight,
    backgroundColor: Colors.WHITE_COLOR,
  },
  forgotInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    alignSelf: 'center',
    color: Colors.SECONDARY_COLOR,
    backgroundColor: Colors.WHITE_COLOR,
    gap: 10,
    marginTop: height * 0.0258, // 21 / 812
    textDecorationLine: 'underline',
  },
  forgotText: {
    textDecorationLine: 'underline',
    color: Colors.SECONDARY_COLOR,
    marginRight: 10,
  },
  divider: {
    color: Colors.SECONDARY_COLOR,
  },
  registerText: {
    textDecorationLine: 'underline',
    color: Colors.SECONDARY_COLOR,
    marginLeft: 10,
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  separator: {
    borderBottomColor: Colors.FADED_BORDER_COLOR,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flex: 1,
  },
  orText: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.SECONDARY_COLOR,
    marginHorizontal: 10,
  },
  googleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  googleButton: {
    borderColor: Colors.FADED_BORDER_COLOR,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  vectorDiagramContainer: {
    alignItems: 'center',
    backgroundColor: Colors.WHITE_COLOR,
    marginTop: -20,
  },
});
