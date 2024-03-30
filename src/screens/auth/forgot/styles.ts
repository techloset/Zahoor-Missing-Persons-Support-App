import { Colors } from '../../../constants/Constants';
import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: Colors.WHITE_COLOR,
    height: '100%',
  },
  rowContainer: {
    flexDirection: 'row',
    gap: 16,
    width: 210,
    height: 28,
    marginTop: 73,
    marginLeft: 47.5,
    alignItems: 'center',
  },
  title: {
    color: Colors.SECONDARY_COLOR,
    fontSize: 23,
    fontWeight: '600',
  },
  imageContainer: {
    marginTop: 56,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  centeredView: {
    width: 308,
    flexDirection: 'column',
    height: 237,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 34,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
  },
  descriptionText: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.SECONDARY_COLOR,
    textAlign: 'center',
  },
});
