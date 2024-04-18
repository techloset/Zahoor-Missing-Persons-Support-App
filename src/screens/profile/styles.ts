import { StyleSheet } from 'react-native';
import { Colors, Units } from '../../constants/constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE_COLOR,
    height: Units.WINDOW_HEIGHT,
    width: Units.WINDOW_WIDTH,
  },
  header: {
    height: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 26,
    marginVertical: 30,
  },
  headerText: {
    color: Colors.SECONDARY_COLOR,
    fontSize: 24,
    fontWeight: '700',
  },
  content: {
    alignItems: 'center',
    flexDirection: 'column',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  profileImageContainer: {
    position: 'relative',
  },
  profileImage: {
    height: 125,
    width: 125,
    borderRadius: 100,
  },
  editIcon: {
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
  inputsContainer: {
    marginTop: 69,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: 24,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 190,
  },
});
