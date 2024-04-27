import { StyleSheet } from 'react-native';
import { Colors, Fonts, Units } from '../../constants/constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    minHeight: Units.WINDOW_HEIGHT * 0.1893,
    width: Units.WINDOW_WIDTH * 0.8907,
    gap: Units.WINDOW_WIDTH * 0.0213,
    marginBottom: Units.WINDOW_HEIGHT * 0.0197,
  },
  imageContainer: {
    height: Units.WINDOW_HEIGHT * 0.1893,
    width: Units.WINDOW_WIDTH * 0.3067,
    borderRadius: 4,
    overflow: 'hidden',
  },
  image: {
    height: Units.WINDOW_HEIGHT * 0.1893,
    width: Units.WINDOW_WIDTH * 0.3067,
  },
  detailsContainer: {
    minHeight: Units.WINDOW_HEIGHT * 0.1622,
    flex: 1,
    justifyContent: 'space-between',
    gap: Units.WINDOW_HEIGHT * 0.0148,
  },
  text: {
    color: Colors.SECONDARY_COLOR,
    lineHeight: Units.WINDOW_HEIGHT * 0.0296,
    fontSize: Units.WINDOW_WIDTH * 0.0427,
    fontWeight: '400',
    fontFamily: Fonts.PRIMARY_FONT,
  },
  button: {
    backgroundColor: Colors.PRIMARY_COLOR,
    width: Units.WINDOW_WIDTH * 0.248,
    height: Units.WINDOW_HEIGHT * 0.0296,
    marginBottom: Units.WINDOW_HEIGHT * 0.0123,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.WHITE_COLOR,
  },
});
