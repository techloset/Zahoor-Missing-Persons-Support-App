import { StyleSheet } from 'react-native';
import { Colors, Units } from '../../constants/constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE_COLOR,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Units.WINDOW_HEIGHT * 0.0332,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: Units.WINDOW_HEIGHT * 0.032,
    height: Units.WINDOW_HEIGHT * 0.1744,
    justifyContent: 'center',
  },
  scrollView: {
    height: Units.WINDOW_HEIGHT * 0.1301,
    marginBottom: Units.WINDOW_HEIGHT * 0.0332,
  },
  featuredProfilesContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Units.WINDOW_HEIGHT * 0.2754,
    width: Units.WINDOW_WIDTH * 0.8933,
    overflow: 'hidden',
    borderRadius: 8,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  cardContainer: {
    width: Units.WINDOW_WIDTH * 0.8933,
    height: Units.WINDOW_HEIGHT * 0.4234,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Units.WINDOW_HEIGHT * 0.0148,
    marginTop: 27,
    alignItems: 'center',
    height: 28,
  },
  featuredProfilesText: {
    color: Colors.SECONDARY_COLOR,
    fontSize: 23,
    fontWeight: '400',
  },
  seeMoreText: {
    color: Colors.PRIMARY_COLOR,
    textDecorationLine: 'underline',
  },
  floatButton: { position: 'absolute', bottom: 30, right: 30 },
});
