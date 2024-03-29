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
  // inputContainer: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
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
  input: {
    width: '100%',
    height: 'auto',
    paddingVertical: 10,
    paddingRight: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.BORDER_COLOR,
    marginBottom: 8,
    color: Colors.SECONDARY_COLOR,
  },
  name: {
    color: Colors.SECONDARY_COLOR,
    width: 'auto',
    height: 20,
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: 'left',
  },
  container: {
    width: 335,
    height: 'auto',
  },
  inputContainer: {
    borderColor: Colors.BORDER_COLOR,
    height: 44,
    width: 308,
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 1,
    marginBottom: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    // margin: 10,
  },
  dateColor: {
    color: Colors.SECONDARY_COLOR,
  },
  image: {
    width: 16.67,
    height: 13.33,
    // top: 3.33,
    left: -10,
    borderWidth: 1.67,
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
});
