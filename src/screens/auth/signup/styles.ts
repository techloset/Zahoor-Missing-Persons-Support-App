import { StyleSheet } from 'react-native';
import { Colors, Fonts, Units } from '../../../constants/constants';

export const styles = StyleSheet.create({
  imageStyles: {
    height: Units.WINDOW_HEIGHT * 0.336,
    width: Units.WINDOW_WIDTH * 0.455,
    top: (-80 * Units.WINDOW_HEIGHT) / 812,
    left: (100 * Units.WINDOW_WIDTH) / 375,
  },
  container: {
    height: Units.WINDOW_HEIGHT * 0.141,
    top: (-150 * Units.WINDOW_HEIGHT) / 812,
  },
  submit: { justifyContent: 'center', alignItems: 'center' },
  heading: {
    fontSize: (64 * Units.WINDOW_WIDTH) / 375,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.PRIMARY_COLOR,
    height: (77 * Units.WINDOW_HEIGHT) / 812,
    fontFamily: Fonts.PRIMARY_FONT,
  },
  caption: {
    textAlign: 'center',
    fontSize: (23 * Units.WINDOW_WIDTH) / 375,
    color: Colors.SECONDARY_COLOR,
    fontFamily: Fonts.PRIMARY_FONT,
  },
  checkboxStyle: {
    width: (16 * Units.WINDOW_WIDTH) / 375,
    height: (16 * Units.WINDOW_WIDTH) / 375,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 3,
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    lineHeight: (20 * Units.WINDOW_HEIGHT) / 812,
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  textStyle: {
    width: (308 * Units.WINDOW_WIDTH) / 375,
    height: (20 * Units.WINDOW_HEIGHT) / 812,
    fontFamily: Fonts.SECONDARY_FONT,
    fontSize: (14 * Units.WINDOW_WIDTH) / 375,
    fontWeight: '400',
    lineHeight: (20 * Units.WINDOW_HEIGHT) / 812,
    letterSpacing: 0,
    textAlign: 'left',
    color: Colors.FADED_TEXT_COLOR,
  },
  checkboxText: {
    color: Colors.SECONDARY_COLOR,
    textAlign: 'left',
    fontSize: (14 * Units.WINDOW_WIDTH) / 375,
    fontWeight: '500',
    fontFamily: Fonts.SECONDARY_FONT,
  },
  form: {
    top: (-130 * Units.WINDOW_HEIGHT) / 812,
    width: (308 * Units.WINDOW_WIDTH) / 375,
    height: (450 * Units.WINDOW_HEIGHT) / 812,
    gap: (24 * Units.WINDOW_HEIGHT) / 812,
    marginHorizontal: (25 * Units.WINDOW_WIDTH) / 375,
    alignSelf: 'center',
  },
  underLineText: {
    color: Colors.PRIMARY_COLOR,
    textDecorationLine: 'underline',
    textAlign: 'center',
    fontFamily: Fonts.PRIMARY_FONT,
  },
});
