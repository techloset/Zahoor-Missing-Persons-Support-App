import { Colors, Units } from '../../../constants/Constants';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  ScrollView: {
    height: Units.WINDOW_HEIGHT,
  },
  rowContainer: {
    flexDirection: 'row',
    gap: 16,
    width: Units.WINDOW_WIDTH * 0.56,
    height: Units.WINDOW_HEIGHT * 0.0345,
    marginTop: Units.WINDOW_HEIGHT * 0.0898,
    marginLeft: Units.WINDOW_WIDTH * 0.1267,
    alignItems: 'center',
  },
  title: {
    color: Colors.SECONDARY_COLOR,
    fontSize: Units.WINDOW_WIDTH * 0.0613,
    fontWeight: '600',
    height: Units.WINDOW_HEIGHT * 0.04,
  },
  imageContainer: {
    marginTop: Units.WINDOW_HEIGHT * 0.0689,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  centeredView: {
    width: Units.WINDOW_WIDTH * 0.8213,
    flexDirection: 'column',
    height: Units.WINDOW_HEIGHT * 0.2919,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Units.WINDOW_HEIGHT * 0.0418,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
  },
  descriptionText: {
    fontSize: Units.WINDOW_WIDTH * 0.0427,
    fontWeight: '400',
    color: Colors.SECONDARY_COLOR,
    textAlign: 'center',
  },
});
