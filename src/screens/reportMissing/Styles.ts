import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/Constants';

export const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    gap: 16,
    width: 375,
    height: 56,
    marginTop: 6,
    alignItems: 'center',
    paddingLeft: 26,
    paddingRight: 19,
    paddingTop: 6,
    paddingBottom: 18,
  },
  title: {
    color: Colors.SECONDARY_COLOR,
    fontSize: 23,
    fontWeight: '600',
  },
  main: {
    backgroundColor: Colors.WHITE_COLOR,
    height: '100%',
  },
  detailsContainer: {
    flexDirection: 'column',
    gap: 16,
    marginTop: 22,
    width: 335,
    height: 'auto',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsTitle: {
    color: Colors.SECONDARY_COLOR,
    fontSize: 23,
    fontWeight: '400',
    lineHeight: 27.6,
  },
  submitContainer: {
    width: 375,
    height: 75,
    borderTopColor: Colors.SECONDARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
  },
  submitButton: {
    width: 207,
    height: 44,
    backgroundColor: Colors.PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  submitText: {
    color: Colors.SUBMIT_BUTTON_TEXT,
    fontSize: 23,
    fontWeight: '500',
    lineHeight: 27.6,
  },
});
