import { StyleSheet } from 'react-native';
import { Colors, Fonts, Units } from '../../constants/constants';

export const styles = StyleSheet.create({
  container: {
    minHeight: Units.WINDOW_HEIGHT,
    width: Units.WINDOW_WIDTH,
    backgroundColor: Colors.BACKGROUND_COLOR,
    flex: 1,
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
  },
  innerContainer: {
    width: (335 * Units.WINDOW_WIDTH) / 375,
    height: (581 * Units.WINDOW_HEIGHT) / 812,
    borderRadius: 20,
    backgroundColor: Colors.WHITE_COLOR,
    opacity: 1,
    position: 'relative',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1,
    padding: 16,
  },
  content: {
    marginTop: 24,
    gap: 16,
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  infoContainer: {
    minWidth: 200,
    alignItems: 'center',
  },
  infoText: {
    color: Colors.SECONDARY_COLOR,
    fontSize: 16,
    fontFamily: Fonts.PRIMARY_FONT,
  },
  locationInputContainer: {
    width: 295,
    marginBottom: 0,
  },
  descriptionInputContainer: {
    width: 295,
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: Colors.SECONDARY_COLOR,
    borderRadius: 8,
    textAlign: 'left',
    textAlignVertical: 'center',
    padding: 8,
    color: Colors.SECONDARY_COLOR,
  },
  descriptionInput: {
    minHeight: 100,
    textAlignVertical: 'top',
    paddingVertical: 8,
    color: Colors.SECONDARY_COLOR,
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    width: 300,
    height: 33,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.PRIMARY_COLOR,
    borderWidth: 1,
    backgroundColor: Colors.WHITE_COLOR,
    marginBottom: 8,
  },
  buttonText: {
    color: Colors.SECONDARY_COLOR,
    fontSize: 16,
    fontFamily: Fonts.PRIMARY_FONT,
  },
});
