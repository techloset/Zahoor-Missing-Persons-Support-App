import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/Constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE_COLOR,
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  searchContainer: {
    marginBottom: 26,
    marginLeft: 'auto',
    marginRight: 'auto',
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
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    padding: 8,
    shadowColor: Colors.FADED_BORDER_COLOR,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.01,
    shadowRadius: 2,
    backgroundColor: Colors.WHITE_COLOR,
  },
  filterItemText: {
    color: Colors.SECONDARY_COLOR,
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
  },
  listContainer: {
    flex: 1,
    height: 454,
    overflow: 'hidden',
  },
});
