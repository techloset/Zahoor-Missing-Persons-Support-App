import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/Constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE_COLOR,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  searchContainer: {
    marginBottom: 26,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  filterText: {
    color: Colors.SECONDARY_COLOR,
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    marginRight: 16,
  },
  filterItem: {
    marginRight: 16,
    height: 36,
    backgroundColor: Colors.WHITE_COLOR,
    borderRadius: 6,
    justifyContent: 'center',
  },
  filterItemText: {
    color: Colors.SECONDARY_COLOR,
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    textAlign: 'center',
    marginRight: 16,
  },
  listContainer: {
    flex: 1,
    height: 454,
    overflow: 'hidden',
  },
});
