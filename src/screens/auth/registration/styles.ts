import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants/Constants';

export const styles = StyleSheet.create({
  imageStyles: {
    height: 259,
    width: 350,
    top: -80,
    left: 100,
  },
  container: {
    height: 115,
    top: -150,
  },
  heading: {
    fontSize: 64,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.PRIMARY_COLOR,
    height: 77,
  },
  caption: {
    textAlign: 'center',
    fontSize: 23,
    color: Colors.SECONDARY_COLOR,
  },
  checkboxStyle: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 3,
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    lineHeight: 20,
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
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
  checkboxText: {
    color: Colors.SECONDARY_COLOR,
    textAlign: 'left',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Inter',
  },
  form: {
    top: -130,
    width: 308,
    height: 450,
    gap: 24,
    marginHorizontal: 25,
    alignSelf: 'center',
  },
  underLineText: {
    color: Colors.PRIMARY_COLOR,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});
