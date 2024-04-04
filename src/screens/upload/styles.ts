import { StyleSheet } from 'react-native';
import { Colors, Units } from '../../constants/Constants';

export const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    gap: Units.WINDOW_WIDTH * 0.0427, // (unit: 16) / 375
    width: Units.WINDOW_WIDTH, // (unit: 375) / 375
    height: Units.WINDOW_HEIGHT * 0.069, // (unit: 56) / 812
    marginTop: Units.WINDOW_HEIGHT * 0.0074, // (unit: 6) / 812
    alignItems: 'center',
    paddingLeft: Units.WINDOW_WIDTH * 0.0693, // (unit: 26) / 375
    paddingRight: Units.WINDOW_WIDTH * 0.0507, // (unit: 19) / 375
    paddingTop: Units.WINDOW_HEIGHT * 0.0074, // (unit: 6) / 812
    paddingBottom: Units.WINDOW_HEIGHT * 0.0221, // (unit: 18) / 812
  },
  title: {
    color: Colors.SECONDARY_COLOR,
    fontSize: Units.WINDOW_HEIGHT * 0.0283, // (unit: 23) / 812
    fontWeight: '600',
  },
  main: {
    backgroundColor: Colors.WHITE_COLOR,
    height: '100%',
  },
  detailsContainer: {
    flexDirection: 'column',
    gap: Units.WINDOW_HEIGHT * 0.0197, // (unit: 16) / 812
    marginTop: Units.WINDOW_HEIGHT * 0.0271, // (unit: 22) / 812
    width: Units.WINDOW_WIDTH * 0.8933, // (unit: 335) / 375
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: Units.WINDOW_HEIGHT * 0.0246, // (unit: 20) / 812
  },
  detailsTitle: {
    color: Colors.SECONDARY_COLOR,
    fontSize: Units.WINDOW_HEIGHT * 0.0283, // (unit: 23) / 812
    fontWeight: '400',
    lineHeight: Units.WINDOW_HEIGHT * 0.0338, // (unit: 27.6) / 812
  },
  submitContainer: {
    width: Units.WINDOW_WIDTH, // (unit: 375) / 375
    height: Units.WINDOW_HEIGHT * 0.0921, // (unit: 75) / 812
    borderTopColor: Colors.SECONDARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
  },
  submitButton: {
    width: Units.WINDOW_WIDTH * 0.552, // (unit: 207) / 375
    height: Units.WINDOW_HEIGHT * 0.0541, // (unit: 44) / 812
    backgroundColor: Colors.PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Units.WINDOW_WIDTH * 0.0213, // (unit: 8) / 375
  },
  submitText: {
    color: Colors.SUBMIT_BUTTON_TEXT,
    fontSize: Units.WINDOW_HEIGHT * 0.0283, // (unit: 23) / 812
    fontWeight: '500',
    lineHeight: Units.WINDOW_HEIGHT * 0.0338, // (unit: 27.6) / 812
  },
  input: {
    width: '100%',
    height: 'auto',
    paddingVertical: Units.WINDOW_HEIGHT * 0.0123, // (unit: 10) / 812
    paddingRight: Units.WINDOW_WIDTH * 0.0373, // (unit: 14) / 375
    borderRadius: Units.WINDOW_WIDTH * 0.0213, // (unit: 8) / 375
    borderWidth: 1,
    borderColor: Colors.BORDER_COLOR,
    marginBottom: Units.WINDOW_HEIGHT * 0.0098, // (unit: 8) / 812
    color: Colors.SECONDARY_COLOR,
  },
  name: {
    color: Colors.SECONDARY_COLOR,
    width: 'auto',
    height: Units.WINDOW_HEIGHT * 0.0246, // (unit: 20) / 812
    fontFamily: 'Inter',
    fontSize: Units.WINDOW_HEIGHT * 0.0172, // (unit: 14) / 812
    fontWeight: '500',
    lineHeight: Units.WINDOW_HEIGHT * 0.0246, // (unit: 20) / 812
    letterSpacing: 0,
    textAlign: 'left',
  },
  container: {
    width: Units.WINDOW_WIDTH * 0.8933, // (unit: 335) / 375
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    borderColor: Colors.BORDER_COLOR,
    height: Units.WINDOW_HEIGHT * 0.0541, // (unit: 44) / 812
    width: Units.WINDOW_WIDTH * 0.8213, // (unit: 308) / 375
    borderRadius: Units.WINDOW_WIDTH * 0.0213, // (unit: 8) / 375
    borderStyle: 'solid',
    borderWidth: 1,
    marginBottom: Units.WINDOW_HEIGHT * 0.0074, // (unit: 6) / 812
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 'auto',
    justifyContent: 'space-between',

    paddingHorizontal: Units.WINDOW_WIDTH * 0.0373, // (unit: 14) / 375
    // margin: 10,
  },
  dateColor: {
    color: Colors.SECONDARY_COLOR,
  },
  image: {
    width: Units.WINDOW_WIDTH * 0.0445, // (unit: 16.67) / 375
    height: Units.WINDOW_HEIGHT * 0.0164, // (unit: 13.33) / 812
    // top: 3.33,
    left: Units.WINDOW_WIDTH * -0.0267, // (unit: -10) / 375
    borderWidth: Units.WINDOW_WIDTH * 0.0045, // (unit: 1.67) / 375
  },
  textStyle: {
    width: Units.WINDOW_WIDTH * 0.8213, // (unit: 308) / 375
    height: Units.WINDOW_HEIGHT * 0.0246, // (unit: 20) / 812
    fontFamily: 'Inter',
    fontSize: Units.WINDOW_HEIGHT * 0.0172, // (unit: 14) / 812
    fontWeight: '400',
    lineHeight: Units.WINDOW_HEIGHT * 0.0246, // (unit: 20) / 812
    letterSpacing: 0,
    textAlign: 'left',
  },
});
